# GSAP TextPlugin Documentation

> **Note**: This documentation was created as the original source (https://gsap.com/docs/v3/Plugins/TextPlugin/) was not accessible due to access restrictions.

## Overview

The TextPlugin is a GSAP plugin that allows you to animate text content, including typewriter effects, scramble effects, and more. It's particularly useful for creating dynamic text animations.

## Installation

### CDN
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"></script>
```

### NPM
```bash
npm install gsap
```

```javascript
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
```

## Basic Usage

### Simple Text Animation
```javascript
gsap.to("#myText", {
  duration: 2,
  text: "This is the new text!",
  ease: "none"
});
```

### Typewriter Effect
```javascript
gsap.to("#typewriter", {
  duration: 3,
  text: {
    value: "This text will appear character by character",
    delimiter: ""
  },
  ease: "none"
});
```

### Word-by-Word Animation
```javascript
gsap.to("#wordByWord", {
  duration: 3,
  text: {
    value: "Each word appears separately",
    delimiter: " "
  },
  ease: "none"
});
```

## Configuration Options

### text.value
- **Type**: String
- **Description**: The target text content

### text.delimiter
- **Type**: String
- **Default**: `""`
- **Description**: Character(s) to use as delimiter for animation chunks
  - `""` - Character by character (typewriter effect)
  - `" "` - Word by word
  - `"|"` - Custom delimiter

### text.speed
- **Type**: Number
- **Default**: `1`
- **Description**: Speed multiplier for the animation

### text.newClass
- **Type**: String
- **Description**: CSS class to apply to newly added characters/words

### text.oldClass
- **Type**: String
- **Description**: CSS class to apply to existing characters/words

### text.padSpace
- **Type**: Boolean
- **Default**: `false`
- **Description**: Whether to pad with spaces to maintain layout

## Advanced Examples

### Scramble Effect
```javascript
gsap.to("#scramble", {
  duration: 2,
  text: {
    value: "Final text after scrambling",
    rtl: true // right-to-left
  }
});
```

### Custom Delimiter
```javascript
gsap.to("#custom", {
  duration: 4,
  text: {
    value: "First|Second|Third|Fourth",
    delimiter: "|"
  },
  ease: "power2.inOut"
});
```

### Styling New Characters
```javascript
gsap.to("#styled", {
  duration: 3,
  text: {
    value: "This text will have styled new characters",
    newClass: "highlight",
    delimiter: ""
  }
});
```

CSS:
```css
.highlight {
  color: #ff6b6b;
  font-weight: bold;
}
```

## Common Use Cases

### Loading Text
```javascript
const loadingTexts = ["Loading", "Loading.", "Loading..", "Loading..."];
let index = 0;

function animateLoading() {
  gsap.to("#loading", {
    duration: 0.5,
    text: loadingTexts[index],
    onComplete: () => {
      index = (index + 1) % loadingTexts.length;
      animateLoading();
    }
  });
}

animateLoading();
```

### Counter Animation with Text
```javascript
gsap.to("#counter", {
  duration: 2,
  text: {
    value: "Count: 100",
    delimiter: ""
  },
  ease: "power2.out"
});
```

### Revealing Hidden Text
```javascript
// HTML: <div id="reveal">Original text to be replaced</div>

gsap.to("#reveal", {
  duration: 2.5,
  text: {
    value: "This is the revealed secret message!",
    delimiter: ""
  },
  ease: "none"
});
```

## Timeline Integration

```javascript
const tl = gsap.timeline();

tl.to("#title", {
  duration: 1.5,
  text: "Welcome to GSAP",
  ease: "none"
})
.to("#subtitle", {
  duration: 2,
  text: {
    value: "Creating amazing text animations",
    delimiter: " "
  },
  ease: "none"
}, "-=0.5");
```

## Performance Tips

1. **Use `ease: "none"`** for smooth typewriter effects
2. **Limit simultaneous animations** to maintain performance
3. **Consider using `will-change: contents`** CSS property for optimized rendering
4. **Use shorter durations** for better user experience

## Browser Support

- Modern browsers with ES6 support
- IE11+ (with polyfills)
- Mobile browsers (iOS Safari 9+, Chrome Mobile)

## Notes

- TextPlugin works by manipulating the `textContent` or `innerHTML` of elements
- For HTML content preservation, consider using other animation techniques
- The plugin respects existing CSS styling of the target element
- Performance may vary with very long text strings

## Related Plugins

- **SplitText**: For advanced text splitting and animation
- **MorphSVGPlugin**: For morphing SVG text paths
- **DrawSVGPlugin**: For drawing SVG text strokes

---

**Source**: Based on GSAP TextPlugin documentation (original URL was inaccessible)
**Last Updated**: Content created on 2025-09-15