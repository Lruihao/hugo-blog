<!-- Source: https://github.com/hugo-fixit/FixIt/blob/master/assets/scss/_variables.scss -->
<!-- Source: https://github.com/hugo-fixit/FixIt/blob/master/assets/scss/core/mixins/_theme-vars.scss -->

# SCSS Variables and Mixins Reference

## Config-to-SCSS Pipeline

The pipeline converts user configuration into SCSS variables:

1. User sets values in `[params.appearance]` in `hugo.toml`
2. `layouts/_partials/function/scss-vars.html` merges user overrides with defaults
3. Hugo passes the merged dict to SCSS via `hugo:vars` (see `assets/scss/_variables.scss`)
4. SCSS variables become available throughout the stylesheet

Default values are defined in `scss-vars.html`. User values override defaults. Some
values are derived from others (e.g. `menu_active_color` defaults to `global_link_color`).

The SCSS entry point loads variables in this order:

```scss
// assets/scss/_variables.scss
@forward "core/maps";
@forward "hugo:vars";          // appearance variables from scss-vars.html
@forward "hugo:vars/internal"; // internal theme config (base URL, logo, loading image)
```

## SCSS Variable Prefix

The theme uses these prefixes for CSS custom properties:

```scss
$prefix: fi- !default;
$rootPrefix: --#{$prefix} !default;  // yields --fi-
$header-height: 3.5rem !default;
```

## CSS Custom Properties

All theme variables are exposed as CSS custom properties with the `--fi-` prefix.
These enable runtime theme switching without recompiling SCSS.

**Theme-independent** (fixed values): `--fi-global-font-family`, `--fi-global-font-size`,
`--fi-global-font-weight`, `--fi-global-line-height`, `--fi-global-border-radius`,
`--fi-header-height`, `--fi-code-font-family`, `--fi-code-font-size`, `--fi-bezier`.

**Theme-dependent** (light/dark via `light-dark()`): `--fi-global-background-color`,
`--fi-global-font-color`, `--fi-global-link-color`, `--fi-global-link-hover-color`,
`--fi-global-border-color`, `--fi-header-background-color`, `--fi-menu-active-color`,
`--fi-single-link-color`, `--fi-code-color`, `--fi-code-block-background-color`,
`--fi-table-background-color`, `--fi-blockquote-color`, `--fi-selection-color`,
`--fi-scrollbar-color`.

## Creating custom.scss

Create `assets/scss/custom.scss` in your project root. This file is loaded after the
theme's styles and has access to all mixins and variables.

```scss
// assets/scss/custom.scss

// Import external fonts
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

// Override CSS custom properties
:root {
  --fi-global-font-family: 'Inter', system-ui, sans-serif;
}

// Custom styles using theme variables
.my-custom-class {
  color: var(--fi-global-link-color);
  border-radius: var(--fi-global-border-radius);
}
```

## Creating custom.ts

Create `assets/js/custom.ts` (or `custom.js`) in your project root. It runs at the end
of each page load.

```typescript
// assets/js/custom.ts
const { fixit } = window as any

class CustomScript {
  constructor() {
    this.init()
  }

  init() {
    console.log('FixIt version:', fixit.version)

    fixit.eventBus.on('fixit:switch-theme', ({ detail }: any) => {
      console.log('Theme switched to:', detail.mode)
    })

    fixit.refresh()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  void new CustomScript()
})
```

## Available SCSS Mixins

### `media` -- Responsive Breakpoints

```scss
@include media('xs') { ... }           // max-width: 679.9px
@include media('sm') { ... }           // 680px - 959.9px
@include media('md') { ... }           // 960px - 1199.9px
@include media('lg') { ... }           // 1200px - 1439.9px
@include media('xl') { ... }           // min-width: 1440px
@include media('md', 'up') { ... }     // min-width: 960px
@include media('lg', 'down') { ... }   // max-width: 1439.9px
@include media('print') { ... }        // print media
@include media('reduce-motion') { ... } // prefers-reduced-motion
```

### `page-style` -- Page Width Variants

```scss
@include page-style('custom') {
  @include media('xl') {
    width: ROUND(70%, 2px);
    max-width: 1600px;
  }
  @include media('lg') {
    width: ROUND(60%, 2px);
  }
  @include media('md') {
    width: ROUND(56%, 2px);
  }
}
```

Then set `page_style = "custom"` in `hugo.toml`.

### `admonition` -- Custom Admonition Types

```scss
// @param {String} $type - Admonition type name
// @param {Color} $color - Text/border color
// @param {Color} $bg - Background color
// @param {Color} $bg-collapsed - Optional collapsed background

.admonition {
  @include admonition(ban, #ff3d00, rgba(255, 61, 0, 0.1));
}
```

Register the icon in `hugo.toml` and add a default title in the language file:

```toml
[params.admonition]
ban = "fa-solid fa-ban"

[admonition]
ban = "Forbidden"
```

### `task-icon` / `task-text` -- Custom Task List Styles

```scss
li[data-task='tip'] {
  @include task-icon(#EA9E36);
  @include task-text(#9974F7);
}
```

Register the icon in `hugo.toml`:

```toml
[params.taskList]
tip = "fa-regular fa-lightbulb"
```

### `set-fi-var` / `set-fi-vars` -- Set CSS Custom Properties

```scss
@include set-fi-var(custom-color, #ff0000);

@include set-fi-vars((
  custom-color: #ff0000,
  custom-bg: #f0f0f0,
));
```

### `light-mode` / `dark-mode` -- Theme-Specific Styles

```scss
.my-element {
  @include light-mode {
    background: #ffffff;
  }
  @include dark-mode {
    background: #1f252d;
  }
}
```

These mixins handle both explicit theme mode (`[data-theme-mode='light'|'dark']`) and
auto mode (`[data-theme-mode='auto']` with `prefers-color-scheme` media query).

### `define-theme-vars` -- Dual-Theme Color Variables

```scss
@include define-theme-vars((
  my-custom-color: (light: #333, dark: #eee),
));
```

This emits `--fi-my-custom-color: light-dark(#333, #eee)` which switches automatically
with the CSS `color-scheme` property. Prefer this over separate `light-mode`/`dark-mode`
blocks when you only need to set color values.

### Other Useful Mixins

```scss
@include border-radius();       // uses fi-var(global-border-radius)
@include border-radius(8px);    // custom value
@include link(#2376b7, #1781b5);          // themed link
@include link(#2376b7, #1781b5, underline); // with decoration
@include box-shadow();
@include bold-dark();           // bolder text in dark mode
@include sticky-top-offset();   // sticky with header offset
@include scrollbar-width();
@include overflow-wrap(break-word);
@include focus-visible-ring();  // accessibility focus ring
```
