#!/usr/bin/env node
/**
 * Visual QA screenshot tool for this static site.
 *
 * Serves the repo root over a local static server, drives it with
 * puppeteer-core against your installed Chrome (no bundled-Chromium
 * download), and saves one PNG per requested viewport width — or, with
 * --selector, a tight screenshot of just one section/element per width.
 *
 * Unlike headless Chrome driven via the CLI (`chrome --window-size=...`),
 * Puppeteer sets the viewport through CDP directly, so there is no ~500px
 * minimum-window-width floor — real mobile widths (e.g. 390px) render
 * correctly.
 *
 * Usage:
 *   npm run screenshot                              full page, default widths
 *   npm run screenshot -- index.html                explicit page
 *   npm run screenshot -- --widths=390,768,1440      custom breakpoints
 *   npm run screenshot -- --selector="#ingredients"  just that section, per width
 *   npm run screenshot -- --out=.screenshots/hero    custom output dir
 *   npm run screenshot -- --full=false               viewport-height shot, not full-page
 *
 * Env:
 *   CHROME_PATH   override the detected Chrome/Chromium binary path
 *
 * Output: PNGs at <out>/<label>-<width>.png, plus a printed list of paths.
 */

import http from "node:http";
import { readFile, mkdir, access } from "node:fs/promises";
import { extname, join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".json": "application/json; charset=utf-8",
  ".ico": "image/x-icon",
};

function parseArgs(argv) {
  const opts = {
    page: "index.html",
    widths: [390, 768, 1440],
    out: ".screenshots",
    full: true,
    selector: null,
    height: 900,
    waitFor: null,
  };
  for (const arg of argv) {
    if (!arg.startsWith("--")) {
      opts.page = arg;
      continue;
    }
    const [key, rawVal] = arg.slice(2).split(/=(.*)/s);
    const val = rawVal ?? "true";
    switch (key) {
      case "widths":
        opts.widths = val.split(",").map((n) => parseInt(n.trim(), 10));
        break;
      case "out":
        opts.out = val;
        break;
      case "full":
        opts.full = val !== "false";
        break;
      case "selector":
        opts.selector = val;
        break;
      case "height":
        opts.height = parseInt(val, 10);
        break;
      case "wait-for":
        opts.waitFor = val;
        break;
      default:
        console.warn(`Unknown flag --${key}, ignoring.`);
    }
  }
  return opts;
}

function startServer(root) {
  return new Promise((resolvePromise) => {
    const server = http.createServer(async (req, res) => {
      try {
        let urlPath = decodeURIComponent(req.url.split("?")[0]);
        if (urlPath === "/") urlPath = "/index.html";
        const filePath = join(root, urlPath);
        if (!filePath.startsWith(root)) {
          res.writeHead(403);
          res.end("Forbidden");
          return;
        }
        const data = await readFile(filePath);
        const type = MIME[extname(filePath)] || "application/octet-stream";
        res.writeHead(200, { "Content-Type": type });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(0, "127.0.0.1", () => resolvePromise(server));
  });
}

async function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
  ];
  for (const candidate of candidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      /* keep looking */
    }
  }
  throw new Error(
    "Could not find a Chrome/Chromium install. Set CHROME_PATH to its binary."
  );
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  await mkdir(opts.out, { recursive: true });

  const server = await startServer(ROOT);
  const { port } = server.address();
  const targetUrl = `http://127.0.0.1:${port}/${opts.page.replace(/^\//, "")}`;

  const executablePath = await findChrome();
  const puppeteer = await import("puppeteer-core");
  const browser = await puppeteer.launch({ headless: true, executablePath });

  const label = opts.selector
    ? opts.selector.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")
    : "full";
  const written = [];

  try {
    for (const width of opts.widths) {
      const page = await browser.newPage();
      await page.setViewport({ width, height: opts.height, deviceScaleFactor: 2 });
      await page.goto(targetUrl, { waitUntil: "networkidle0" });
      // Kill scroll-behavior:smooth and CSS transitions so nothing is mid-animation.
      await page.addStyleTag({
        content: "*{scroll-behavior:auto!important;transition:none!important;}",
      });
      if (opts.waitFor) await page.waitForSelector(opts.waitFor, { timeout: 10000 });

      const outPath = join(opts.out, `${label}-${width}.png`);
      if (opts.selector) {
        const el = await page.$(opts.selector);
        if (!el) throw new Error(`Selector not found: ${opts.selector}`);
        await el.scrollIntoView();
        await el.screenshot({ path: outPath });
      } else {
        await page.screenshot({ path: outPath, fullPage: opts.full });
      }
      written.push(outPath);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log("Screenshots written:");
  for (const p of written) console.log(" -", resolve(p));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
