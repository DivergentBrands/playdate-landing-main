# Playdate™ — Founding 100 Landing Page

Single-scroll landing page for the Playdate™ Founding 100 email pre-launch
(reserve an 8 fl oz bottle for $9.99, regularly $20.99).

Built as **plain HTML + CSS + a little vanilla JS** — no framework, no build
step — so it drops cleanly into a Shopify theme later.

## Preview locally

Open `index.html` directly, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Visual QA (Puppeteer)

`scripts/screenshot.mjs` drives your installed Chrome via `puppeteer-core`
(no bundled-Chromium download) to screenshot the site at real viewport
widths — useful for checking a change before/after, or a single section in
isolation. It serves the repo root itself, so nothing else needs to be
running first.

```bash
npm install                                          # once, installs puppeteer-core
npm run screenshot                                    # full page, 390/768/1440px
npm run screenshot -- --widths=390,1440                # custom breakpoints
npm run screenshot -- --selector="#ingredients"        # just one section, each width
npm run screenshot -- --selector="#founding" --widths=390
```

Output goes to `.screenshots/<label>-<width>.png` (gitignored). Images are
captured at `deviceScaleFactor: 2` for crisp inspection. Unlike driving
headless Chrome from the command line (`--window-size=...`), Puppeteer sets
the viewport over CDP directly, so there's no minimum-window-width floor —
narrow mobile widths render correctly.

Set `CHROME_PATH` to point at a different Chrome/Chromium binary if the
default macOS Chrome path isn't right for your machine.

## Deploy to Vercel

Import the repo in Vercel with **Framework Preset: Other**. Output/root is the
repo root (`index.html`). No install or build command needed. `vercel.json`
sets long cache headers for `/assets/*`.

## Structure

```
index.html                  all 16 sections, semantic <section> blocks
assets/css/tokens.css       brand design tokens (colors, fonts, radius)
assets/css/styles.css       all layout + component styles (mobile-first)
assets/js/main.js           header condense + signup validation/success swap
assets/images/              lifestyle photos, HOCl diagram, bottle render
assets/playdate-logo.svg    navy Quicksand wordmark
assets/favicon.svg          soft-cloud mark
```

Design tokens come straight from `playdate-brand-guidelines.md` §7. Content is
verbatim from `Landing Page Outline_Copywriting - Playdate.md`.

### Compliance

Playdate is positioned as a **cosmetic hand + skin cleanser**. Do not add the
words *sanitizer / sanitize / disinfect / antimicrobial / antibacterial*, any
"kills germs" / illness-prevention / treat-heal claims, or "pediatrician
approved / newborn safe". The only place "sanitizer"/"disinfectant" appear is
the FAQ + footer disclaimer, where they are explicitly disclaimed (approved
copy). The footer carries the standing disclaimer verbatim. The site never
names a parent company — brand is **Playdate™** only.

## Porting to Shopify

Each `<section>` is self-contained and maps to one `sections/*.liquid`:

| This page | Shopify |
|---|---|
| `assets/css/*`, `assets/js/*` | move to theme `assets/`, load via `{{ 'x' \| asset_url \| stylesheet_tag }}` |
| Google Fonts `<link>` in `<head>` | add to `layout/theme.liquid` `<head>` |
| `<img src="assets/images/x.jpg">` | `{{ 'x.jpg' \| asset_url \| image_url: width: 1600 \| image_tag }}` or a section image_picker setting |
| Section headings / body copy | expose as section `settings` (text / richtext) in the schema |
| Signup `<form data-signup=...>` | wrap the fields in `{% form 'customer' %}` … `{% endform %}` — keep `name="contact[email]"` and `name="contact[tags]"`; delete the JS success-swap and let Shopify redirect / show `form.posted_successfully?` |
| Success block copy | render inside `{% if form.posted_successfully? %}` |
| Footer Privacy / Terms `#` links | point to the real Shopify policy URLs |

The signup markup already includes `form_type=customer`, `utf8`, and
`contact[tags]="newsletter,founding-100"` so the Liquid wrap is minimal and
new subscribers land in the Shopify customer list tagged for the founding offer.
