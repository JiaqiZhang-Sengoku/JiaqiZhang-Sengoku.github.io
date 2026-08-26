(function () {
  "use strict";

  var chart = document.querySelector("[data-visitor-chart]");
  var map = document.querySelector("[data-visitor-map]");
  if (!chart && !map) {
    return;
  }

  var bars = chart
    ? Array.prototype.slice.call(chart.querySelectorAll("[data-visitor-bar]"))
    : [];
  var formatter = typeof Intl !== "undefined" && typeof Intl.NumberFormat === "function"
    ? new Intl.NumberFormat("en-US")
    : null;
  var observer = null;
  var resizeObserver = null;
  var timeout = null;

  function readValue(element) {
    var digits = element.textContent.replace(/[^0-9]/g, "");
    if (!digits) {
      return null;
    }

    var value = Number(digits);
    return Number.isFinite(value) ? value : null;
  }

  function render() {
    if (!chart) {
      return;
    }

    var values = bars.map(function (bar) {
      return readValue(bar.querySelector("[data-visitor-value]"));
    });

    if (values.some(function (value) { return value === null; })) {
      return;
    }

    var maximum = Math.max.apply(Math, values.concat([1]));

    bars.forEach(function (bar, index) {
      var value = values[index];
      var valueElement = bar.querySelector("[data-visitor-value]");
      var height = value === 0 ? 6 : Math.max(14, Math.round((value / maximum) * 100));

      bar.style.setProperty("--visitor-bar-height", height + "%");
      valueElement.textContent = formatter ? formatter.format(value) : String(value);
      valueElement.title = String(value);
    });

    chart.classList.add("is-ready");
    chart.classList.remove("is-unavailable");
    window.clearTimeout(timeout);
    if (observer) {
      observer.disconnect();
    }
  }

  function sizeMap() {
    if (!map) {
      return;
    }

    var viewport = map.querySelector(".visitor-map-embed");
    var availableWidth = viewport ? viewport.clientWidth : 0;
    if (!availableWidth) {
      return;
    }

    var scale = Math.min(0.72, availableWidth / 875);
    var region = map.closest(".visitor-insights") || map;
    var mapWidth = 875 * scale;
    var offsetX = ((availableWidth - mapWidth) / 2) - (33 * scale);

    region.style.setProperty("--visitor-map-scale", scale.toFixed(4));
    region.style.setProperty("--visitor-map-height", Math.round(500 * scale) + "px");
    region.style.setProperty("--visitor-map-offset-x", Math.round(offsetX) + "px");
  }

  if (chart && typeof MutationObserver === "function") {
    observer = new MutationObserver(render);
    bars.forEach(function (bar) {
      observer.observe(bar.querySelector("[data-visitor-value]"), {
        childList: true,
        characterData: true,
        subtree: true
      });
    });
  }

  if (chart) {
    timeout = window.setTimeout(function () {
      chart.classList.add("is-unavailable");
    }, 8000);
    render();
  }

  if (map) {
    var frame = map.querySelector("[data-visitor-map-frame]");
    sizeMap();

    if (frame) {
      frame.addEventListener("load", function () {
        map.classList.add("is-loaded");
      });
    }

    if (typeof ResizeObserver === "function") {
      resizeObserver = new ResizeObserver(sizeMap);
      resizeObserver.observe(map);
    } else {
      window.addEventListener("resize", sizeMap);
    }
  }

  window.addEventListener("pagehide", function () {
    window.clearTimeout(timeout);
    if (observer) {
      observer.disconnect();
    }
    if (resizeObserver) {
      resizeObserver.disconnect();
    } else {
      window.removeEventListener("resize", sizeMap);
    }
  });
}());
