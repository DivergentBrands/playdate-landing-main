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

  /* Proof strip marquee (mobile only) ---------------------------------
     A CSS animation slides the list left on a loop; to make that loop
     seamless we duplicate the items once so the track can travel exactly
     -50% before snapping back. The clone is aria-hidden (screen readers
     only need the real list once) and is hidden by CSS at desktop widths. */
  var proofList = document.querySelector(".proof ul");
  if (proofList) {
    var proofOriginalItems = Array.prototype.slice.call(proofList.children);
    /* Marks the real (non-clone) last item so its trailing "·" separator
       can be suppressed at desktop widths (clones are display:none there,
       so it's visually last again) while staying enabled on mobile (where
       it flows straight into the cloned repeat). */
    proofOriginalItems[proofOriginalItems.length - 1].classList.add("proof__last-real");
    proofOriginalItems.forEach(function (li) {
      var clone = li.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("data-clone", "");
      proofList.appendChild(clone);
    });
  }
})();
