
export const toHex = function(rgb) {
  const r = rgb.r.toString(16);
  const g = rgb.g.toString(16);
  const b = rgb.b.toString(16);
  return '#' + (r.length === 1 ? '0' + r : r) + (g.length === 1 ? '0' + g : g) + (b.length === 1 ? '0' + b : b);
}

export const toRGB = function(color) {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);
  return {
    r: r,
    g: g,
    b: b
  }
}

export const colorInterpolation = function(color1, color2, t) {
  const rgb1 = toRGB(color1);
  const rgb2 = toRGB(color2);
  console.log(rgb1);
  return toHex({
    r: Math.abs(Math.floor(rgb2.r * t - rgb1.r * (1 - t))),
    g: Math.abs(Math.floor(rgb2.g * t - rgb1.g * (1 - t))),
    b: Math.abs(Math.floor(rgb2.b * t - rgb1.b * (1 - t))),
  });
}
