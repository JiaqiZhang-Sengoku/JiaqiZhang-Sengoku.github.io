(function () {
  "use strict";

  var root = document.querySelector("[data-visitor-stats]");
  if (!root) {
    return;
  }

  var values = Array.prototype.slice.call(root.querySelectorAll("[data-visitor-value]"));
  var status = root.querySelector("[data-visitor-status]");
  var formatter = typeof Intl !== "undefined" && typeof Intl.NumberFormat === "function"
    ? new Intl.NumberFormat("en-US")
    : null;
  var observer = null;
  var timeout = null;

  function readNumber(element) {
    var digits = element.textContent.replace(/[^0-9]/g, "");
    if (!digits) {
      return null;
    }
    var value = Number(digits);
    return Number.isFinite(value) ? value : null;
  }

  function refresh() {
    var readyCount = 0;

    values.forEach(function (element) {
      var value = readNumber(element);
      if (value === null) {
        return;
      }

      var formatted = formatter ? formatter.format(value) : String(value);
      if (element.textContent !== formatted) {
        element.textContent = formatted;
      }
      element.dataset.visitorReady = "true";
      element.title = String(value);
      readyCount += 1;
    });

    root.classList.toggle("has-data", readyCount > 0);

    if (readyCount === values.length) {
      root.classList.remove("is-unavailable");
      root.classList.add("is-ready");
      if (status) {
        status.textContent = "Live";
      }
      window.clearTimeout(timeout);
      if (observer) {
        observer.disconnect();
      }
    }
  }

  if (typeof MutationObserver === "function") {
    observer = new MutationObserver(refresh);
    values.forEach(function (element) {
      observer.observe(element, { childList: true, characterData: true, subtree: true });
    });
  }

  timeout = window.setTimeout(function () {
    refresh();
    if (!root.classList.contains("has-data")) {
      root.classList.add("is-unavailable");
      if (status) {
        status.textContent = "Unavailable";
      }
    }
  }, 8000);

  window.addEventListener("pagehide", function () {
    window.clearTimeout(timeout);
    if (observer) {
      observer.disconnect();
    }
  });

  refresh();
}());
