'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var easeInOutCubic = function easeInOutCubic(t) {
  return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
var position = function position(start, end, elapsed, duration) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeInOutCubic(elapsed / duration);
};
var scrollTo = function scrollTo(end, duration) {
  duration = duration || 500;
  if (typeof window === 'undefined') return;
  var start = window.pageYOffset,
      clock = Date.now();

  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
    return window.setTimeout(fn, 15);
  };

  var step = function step() {
    var elapsed = Date.now() - clock;
    window.scroll(0, position(start, end, elapsed, duration));
    if (elapsed < duration) requestAnimationFrame(step);
  };
  step();
};
exports.default = scrollTo;