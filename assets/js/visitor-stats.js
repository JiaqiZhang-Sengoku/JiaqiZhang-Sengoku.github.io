(function () {
  "use strict";

  var root = document.querySelector("[data-visitor-stats]");
  if (!root) {
    return;
  }

  var values = Array.prototype.slice.call(root.querySelectorAll("[data-visitor-value]"));
  var status = root.querySelector("[data-visitor-status]");
  var visitTime = root.querySelector("[data-visitor-time]");
  var visitTimezone = root.querySelector("[data-visitor-timezone]");
  var visitLocation = root.querySelector("[data-visitor-location]");
  var formatter = typeof Intl !== "undefined" && typeof Intl.NumberFormat === "function"
    ? new Intl.NumberFormat("en-US")
    : null;
  var observer = null;
  var timeout = null;
  var locationTimeout = null;
  var locationController = typeof AbortController === "function" ? new AbortController() : null;
  var locationObserver = null;
  var locationSettled = false;

  function padNumber(value) {
    return value < 10 ? "0" + value : String(value);
  }

  function formatUtcOffset(date) {
    var offset = -date.getTimezoneOffset();
    var sign = offset >= 0 ? "+" : "-";
    var absolute = Math.abs(offset);
    return "UTC" + sign + padNumber(Math.floor(absolute / 60)) + ":" + padNumber(absolute % 60);
  }

  function renderVisitTime() {
    if (!visitTime) {
      return;
    }

    var now = new Date();
    var formatted = now.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
    var timezone = "Local time";

    if (typeof Intl !== "undefined" && typeof Intl.DateTimeFormat === "function") {
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || timezone;
    }

    visitTime.textContent = formatted;
    visitTime.setAttribute("datetime", now.toISOString());

    if (visitTimezone) {
      visitTimezone.textContent = timezone.replace(/_/g, " ") + " | " + formatUtcOffset(now);
    }
  }

  function finishLocation(text, available, detail) {
    if (locationSettled) {
      return;
    }

    locationSettled = true;
    window.clearTimeout(locationTimeout);

    if (visitLocation) {
      visitLocation.textContent = text;
      if (detail) {
        visitLocation.title = detail;
      }
    }

    root.classList.toggle("is-location-ready", available);
    root.classList.toggle("is-location-unavailable", !available);
  }

  function loadVisitLocation() {
    if (!visitLocation || typeof window.fetch !== "function") {
      finishLocation("Location unavailable", false);
      return;
    }

    var options = {
      cache: "no-store",
      referrerPolicy: "no-referrer"
    };

    if (locationController) {
      options.signal = locationController.signal;
    }

    locationTimeout = window.setTimeout(function () {
      if (locationController) {
        locationController.abort();
      }
      finishLocation("Location unavailable", false);
    }, 7000);

    window.fetch("https://ipwho.is/", options)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Location request failed");
        }
        return response.json();
      })
      .then(function (data) {
        if (!data || data.success === false) {
          throw new Error("Location response unavailable");
        }

        var primary = [];
        var detail = [];
        var locality = data.city || data.region;

        if (locality) {
          primary.push(locality);
        }
        if (data.country && primary.indexOf(data.country) === -1) {
          primary.push(data.country);
        }

        [data.city, data.region, data.country].forEach(function (part) {
          if (part && detail.indexOf(part) === -1) {
            detail.push(part);
          }
        });

        if (!primary.length) {
          throw new Error("Location fields unavailable");
        }

        finishLocation(primary.join(", "), true, detail.join(", "));
      })
      .catch(function () {
        finishLocation("Location unavailable", false);
      });
  }

  function scheduleVisitLocation() {
    if (typeof window.IntersectionObserver !== "function") {
      loadVisitLocation();
      return;
    }

    locationObserver = new window.IntersectionObserver(function (entries) {
      if (!entries.some(function (entry) { return entry.isIntersecting; })) {
        return;
      }

      locationObserver.disconnect();
      locationObserver = null;
      loadVisitLocation();
    }, { rootMargin: "300px 0px" });

    locationObserver.observe(root);
  }

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
        status.textContent = "Live data";
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
        status.textContent = "Count unavailable";
      }
    }
  }, 8000);

  window.addEventListener("pagehide", function () {
    window.clearTimeout(timeout);
    window.clearTimeout(locationTimeout);
    if (locationController) {
      locationController.abort();
    }
    if (locationObserver) {
      locationObserver.disconnect();
    }
    if (observer) {
      observer.disconnect();
    }
  });

  renderVisitTime();
  scheduleVisitLocation();
  refresh();
}());
