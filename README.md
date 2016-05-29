# color-interpolator
This is a little package to interpolate between colors.

I developed it to be used together with `react-motion` but it is agnostic enough to be used for any case where color interpolation is needed.

## Installation
```bash
npm install --save color-interpolator
```

## Use cases
I have an example of how to use it in: `https://github.com/germtb/react-motion-examples`

The idea is the following:
```
import React from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';
import {toRGB, colorInterpolation} from 'color-interpolator';

const SlideColor = props => {
  const color1 = toRGB(props.origin);
  const color2 = toRGB(props.end);
  // Since it is not possible to use spring over a color, a parameter is used
  const defaultStyle = {
    t: 0
  };
  const endStyle = {
    t: spring(1)
  };
  return (
    <Motion defaultStyle={defaultStyle} style={endStyle}>
      {style => {
          // Here the parameter is used as an interpolation parameter
          const color = colorInterpolation(props.origin, props.end, style.t);
          console.log(style.t);
          return (
          <div style={Object.assign({}, props.style, {color: color})}>
            {props.children}
          </div>);
        }
      }
    </Motion>
  );
};

ReactDOM.render(
  (<div>
    <SlideColor origin='#AAff00' end='#ff00AA'>
      <p> Hello slide color </p>
    </SlideColor>
  </div>),
  document.getElementById('app')
);

```
