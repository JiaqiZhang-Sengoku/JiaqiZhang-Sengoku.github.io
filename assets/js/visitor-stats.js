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
  var sources = chart
    ? Array.prototype.slice.call(chart.querySelectorAll("[data-visitor-source]"))
    : [];
  var formatter = typeof Intl !== "undefined" && typeof Intl.NumberFormat === "function"
    ? new Intl.NumberFormat("en-US")
    : null;
  var observer = null;
  var resizeObserver = null;
  var sourceMapWidth = 875;
  var sourceMapHeight = 500;
  var sourceZoomLeft = 43.1;
  var sourceZoomTop = 295.8;
  var sourceZoomWidth = 33.2;
  var sourceZoomHeight = 64;
  var controlInset = 8;

  function readValue(source, display) {
    var liveText = source ? source.textContent.trim() : "";
    var isFallback = !/^\d[\d,]*$/.test(liveText);
    var rawValue = isFallback
      ? display.getAttribute("data-visitor-fallback")
      : liveText;
    if (!rawValue) {
      return null;
    }

    var value = Number(rawValue.replace(/,/g, ""));
    return Number.isFinite(value) ? { value: value, isFallback: isFallback } : null;
  }

  function render() {
    if (!chart) {
      return;
    }

    var values = bars.map(function (bar, index) {
      return readValue(sources[index], bar.querySelector("[data-visitor-value]"));
    });

    if (values.some(function (value) { return value === null; })) {
      return;
    }

    var usingFallback = values.some(function (value) {
      return value.isFallback;
    });
    var numericValues = values.map(function (value) {
      return value.value;
    });

    var maximum = Math.max.apply(Math, numericValues.concat([1]));

    bars.forEach(function (bar, index) {
      var value = numericValues[index];
      var valueElement = bar.querySelector("[data-visitor-value]");
      var height = value === 0 ? 6 : Math.max(14, Math.round((value / maximum) * 100));
      var formattedValue = formatter ? formatter.format(value) : String(value);

      bar.style.setProperty("--visitor-bar-height", height + "%");
      if (valueElement.textContent !== formattedValue) {
        valueElement.textContent = formattedValue;
      }
      valueElement.title = values[index].isFallback
        ? "As of Oct. 6, 2026"
        : String(value);
    });

    chart.classList.add("is-ready");
    chart.classList.remove("is-unavailable");
    chart.classList.toggle("is-fallback", usingFallback);

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

    var scale = Math.min(1.2, availableWidth / sourceMapWidth);
    var region = map.closest(".visitor-insights") || map;
    var renderedHeight = sourceMapHeight * scale;
    var visibleHeight = Math.min(renderedHeight, 400);
    var compactControls = window.matchMedia && window.matchMedia("(max-width: 430px)").matches;
    var targetControlWidth = compactControls ? 28 : 32;
    var targetControlHeight = compactControls ? 36 : 60;
    var offsetX = controlInset
      + ((targetControlWidth - (sourceZoomWidth * scale)) / 2)
      - (sourceZoomLeft * scale);
    var offsetY = controlInset
      + ((targetControlHeight - (sourceZoomHeight * scale)) / 2)
      - (sourceZoomTop * scale);

    region.style.setProperty("--visitor-map-scale", scale.toFixed(4));
    region.style.setProperty("--visitor-map-height", Math.round(visibleHeight) + "px");
    region.style.setProperty("--visitor-map-offset-x", Math.round(offsetX) + "px");
    region.style.setProperty("--visitor-map-offset-y", Math.round(offsetY) + "px");
  }

  if (chart && typeof MutationObserver === "function") {
    observer = new MutationObserver(render);
    sources.forEach(function (source) {
      observer.observe(source, {
        childList: true,
        characterData: true,
        subtree: true
      });
    });
  }

  if (chart) {
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
