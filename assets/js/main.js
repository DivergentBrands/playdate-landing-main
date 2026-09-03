/* Playdate landing — minimal vanilla JS
   - Sticky header condense on scroll
   - Signup form: client-side validation + success swap (prototype only).
     On Shopify this <form> is wrapped in {% form 'customer' %} and posts natively.
*/
(function () {
  "use strict";

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
})();
