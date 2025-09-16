# Theming in shadcn/ui

## Overview
Shadcn/ui provides two primary approaches to theming:
1. CSS Variables (Recommended)
2. Utility Classes

## CSS Variables Method

### Configuration
To use CSS variables, set `tailwind.cssVariables` to `true` in `components.json`:

```json
{
  "tailwind": {
    "cssVariables": true
  }
}
```

### Usage Example
```jsx
<div className="bg-background text-foreground" />
```

## Utility Classes Method

### Configuration
Set `tailwind.cssVariables` to `false` in `components.json`:

```json
{
  "tailwind": {
    "cssVariables": false
  }
}
```

### Usage Example
```jsx
<div className="bg-zinc-950 dark:bg-white" />
```

## Theming Convention
- Uses a `background` and `foreground` color convention
- `background` suffix is omitted for background color
- Example variables:
  ```css
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  ```

## Color Variables
Includes predefined variables for:
- Background
- Foreground
- Card
- Popover
- Primary
- Secondary
- Muted
- Accent
- Destructive
- Border
- Input
- Ring
- Chart colors
- Sidebar variations

## Adding New Colors
1. Add colors to CSS file
2. Update `tailwind.config.js`

Example:
```css
:root {
  --warning: oklch(0.84 0.16 84);
  --warning-foreground: oklch(0.28 0.07 46);
}
```

## Base Color Options
Provides predefined color palettes:
- Neutral
- Stone
- Zinc
- Gray
- Slate

Each palette includes light and dark mode variations with comprehensive color scales from 50 to 950.

---

**Source:** https://ui.shadcn.com/docs/theming