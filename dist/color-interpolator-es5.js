'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toHex = exports.toHex = function toHex(rgb) {
  var r = rgb.r.toString(16);
  var g = rgb.g.toString(16);
  var b = rgb.b.toString(16);
  return '#' + (r.length === 1 ? '0' + r : r) + (g.length === 1 ? '0' + g : g) + (b.length === 1 ? '0' + b : b);
};

var toRGB = exports.toRGB = function toRGB(color) {
  var r = parseInt(color.substring(1, 3), 16);
  var g = parseInt(color.substring(3, 5), 16);
  var b = parseInt(color.substring(5, 7), 16);
  return {
    r: r,
    g: g,
    b: b
  };
};

var colorInterpolation = exports.colorInterpolation = function colorInterpolation(color1, color2, t) {
  var rgb1 = toRGB(color1);
  var rgb2 = toRGB(color2);
  return toHex({
    r: Math.abs(Math.floor(rgb2.r * t + rgb1.r * (1 - t))),
    g: Math.abs(Math.floor(rgb2.g * t + rgb1.g * (1 - t))),
    b: Math.abs(Math.floor(rgb2.b * t + rgb1.b * (1 - t)))
  });
};
