---
name: fixit-customize
description: >
  FixIt Hugo theme customization — appearance variables (colors, fonts, sizes),
  custom partials injection (15 blocks), SCSS/CSS overrides, custom scripts,
  and theme component integration. Use when customizing FixIt theme appearance.
metadata:
  author: hugo-fixit
  version: 2026.8.4
  source: Generated from https://github.com/hugo-fixit/FixIt and https://github.com/hugo-fixit/fixit-docs
---

# FixIt Theme Customization

FixIt provides four customization layers. Use them in combination to control
appearance, inject behavior, and extend templates without modifying theme source.

## Customization Layers

Apply these layers in order of specificity. Later layers override earlier ones.

1. **Config** -- Set `[params.appearance]` in `hugo.toml` for colors, fonts, and sizes. The theme converts these to SCSS variables via `hugo:vars`.

2. **SCSS** -- Create `assets/scss/custom.scss` in your project root. Access all theme mixins, variables, and CSS custom properties (`--fi-*` prefix).

3. **Scripts** -- Create `assets/js/custom.ts` (or `.js`) in your project root. Use `window.fixit` API for runtime behavior and event listening.

4. **Partials** -- Set `[params.custom_partials]` in `hugo.toml` to inject Hugo templates into 15 named blocks. Partial paths are relative to `layouts/_partials/`.

## Quick Reference: Appearance

```toml
[params.appearance]
global_font_size = "16px"
global_font_color = "#1f2328"
global_font_family = "system-ui, sans-serif"
global_link_color = "#161209"
global_border_radius = "6px"
header_background_color = "#f6f8fa"
code_font_family = "Source Code Pro, Menlo, Consolas, Monaco, monospace"
page_style = "normal"  # narrow | normal | wide | custom
```

All color values must use hex format (e.g. `#ff0000`). Dark mode variants use the `_dark` suffix.

## Quick Reference: Custom Partials

```toml
[params.custom_partials]
head = []
assets = []
footer = []
profile = []
# ... 15 blocks total
```

Each key accepts an array of partial paths relative to `layouts/_partials/`.

## Quick Reference: Custom Admonitions & Task Lists

```toml
[params.admonition]
ban = "fa-solid fa-ban"

[params.taskList]
tip = "fa-regular fa-lightbulb"
```

```scss
.admonition {
  @include admonition(ban, #ff3d00, rgba(255, 61, 0, 0.1));
}
li[data-task='tip'] {
  @include task-icon(#EA9E36);
  @include task-text(#9974F7);
}
```

## Reference Files

| Topic | Description | File |
| ------- | ------------- | ------ |
| Appearance Variables | All `[params.appearance]` variables with defaults | [references/appearance.md](references/appearance.md) |
| Custom Partials | 15 injection points, config keys, examples | [references/custom-partials.md](references/custom-partials.md) |
| SCSS Variables & Mixins | Config-to-SCSS pipeline, CSS properties, mixins, theme switching | [references/scss-variables.md](references/scss-variables.md) |

## Theme Component Integration

Install a theme component (e.g. `component-projects`) as a Hugo module or Git submodule, then inject its partial via config:

```toml
[module.imports]
path = "github.com/hugo-fixit/component-projects"

[params.custom_partials]
assets = ["inject/component-projects.html"]
```
