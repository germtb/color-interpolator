import {expect} from 'chai';
import {
  toHex,
  toRGB,
  colorInterpolation
} from '../src/color-interpolator';

describe('color interpolator', () => {

  const c1 = '#ff9900';
  const c2 = '#0099ff';

  it('converts hex to rgb', () => {
    expect(toRGB(c1)).to.deep.equal({
      r: 255,
      g: 153,
      b: 0
    });
  });

  it('converts rgb to hex', () => {
    const c = {
      r: 255,
      g: 153,
      b: 0
    };
    expect(toHex(c)).to.equal('#ff9900');
  });

  it('returns the same color when interpolating between equal colors', () => {
    expect(colorInterpolation(c1, c1, 0.5)).to.equal('#ff9900');
  });

  it('returns the interpolated color when interpolating between different colors', () => {
    expect(colorInterpolation(c1, c2, 0.5)).to.equal('#7f997f');
  })

  it('returns the start color when the interpolation paramter is zero', () => {
    expect(colorInterpolation(c1, c2, 0)).to.equal('#ff9900');
  });

  it('returns the end color when the interpolation paramter is one', () => {
    expect(colorInterpolation(c1, c2, 1)).to.equal('#0099ff');
  });

});
