/* Playdate landing — minimal vanilla JS
   - Sticky header condense on scroll
   - Signup form: client-side validation + success swap (prototype only).
     On Shopify this <form> is wrapped in {% form 'customer' %} and posts natively.
   - Scroll entrance + a considered confirmation moment (Impeccable · delight),
     all gated on prefers-reduced-motion.
*/
(function () {
  "use strict";

  var reduce =
    window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header condense ---------------------------------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-condensed", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Signup forms ---------------------------------------------------------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.querySelectorAll("form[data-signup]").forEach(function (form) {
    var input = form.querySelector('input[type="email"]');
    var errorEl = form.querySelector("[data-signup-error]");
    var successEl = document.querySelector(
      '[data-signup-success="' + form.getAttribute("data-signup") + '"]'
    );

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var value = (input.value || "").trim();

      if (!value) {
        showError("Please enter your email address.");
        return;
      }
      if (!EMAIL_RE.test(value)) {
        showError("That doesn't look like a valid email.");
        return;
      }
      showError("");

      /* Prototype: no backend. Reveal the success message in place.
         On Shopify, remove this handler and let {% form 'customer' %} submit. */
      form.hidden = true;
      if (successEl) {
        celebrate(successEl);
        successEl.hidden = false;
        successEl.setAttribute("tabindex", "-1");
        successEl.focus();
      }
    });

    function showError(msg) {
      if (errorEl) errorEl.textContent = msg;
      input.setAttribute("aria-invalid", msg ? "true" : "false");
    }
  });

  /* Considered confirmation moment ----------------------------------------
     A checkmark that strokes itself, then the card settles in. */
  var CHECK =
    '<svg class="pd-check" viewBox="0 0 24 24" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="12"/>' +
    '<path d="M6 12.5 10.5 17 18 8"/></svg>';

  function celebrate(el) {
    if (!el.querySelector(".pd-check")) el.insertAdjacentHTML("afterbegin", CHECK);
    if (reduce) return;
    el.classList.remove("is-celebrate");
    void el.offsetWidth; /* restart the animation */
    el.classList.add("is-celebrate");
  }

  /* Scroll entrance ----------------------------------------------------- */
  if (!reduce && "IntersectionObserver" in window) {
    document.documentElement.classList.add("has-reveal");

    var blocks = [];
    document.querySelectorAll("main > section").forEach(function (sec) {
      var picks = sec.querySelectorAll(
        ":scope > .container > *:not(.split), " +
          ":scope > .container > .split > .split__media, " +
          ":scope > .container > .split > .split__body"
      );
      (picks.length ? picks : [sec]).forEach(function (el) {
        el.classList.add("reveal");
        blocks.push(el);
      });
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target;
          var sibs = Array.prototype.filter.call(
            el.parentElement.children,
            function (c) {
              return c.classList.contains("reveal");
            }
          );
          el.style.transitionDelay = Math.min(sibs.indexOf(el), 3) * 60 + "ms";
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    blocks.forEach(function (el) {
      io.observe(el);
    });
  }
})();
