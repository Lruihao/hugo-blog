<!-- Source: https://github.com/hugo-fixit/FixIt/blob/master/layouts/_partials/function/scss-vars.html -->

# Appearance Variables Reference

All variables are set via `[params.appearance]` in `hugo.toml`. The theme converts them
to SCSS variables through `layouts/_partials/function/scss-vars.html`, which then become
CSS custom properties with the `--fi-` prefix.

Color values must use hex format (e.g. `#ff0000`). CSS named colors (e.g. `red`) are not
supported. Dark mode variants use the `_dark` suffix.

## Global Typography

```toml
[params.appearance]
global_font_family = "system-ui, -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei UI, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
global_font_size = "16px"
global_font_weight = "400"
global_line_height = "1.5rem"
global_border_radius = "6px"
global_background_color = "#ffffff"
global_background_color_dark = "#1f252d"
global_font_color = "#1f2328"
global_font_color_dark = "#b3bdcb"
global_font_secondary_color = "#8b949e"
global_font_secondary_color_dark = "#7d8792"
```

| Variable | Default (light) | Default (dark) |
| ---------- | --------------- | -------------- |
| `global_font_size` | `16px` | -- |
| `global_font_weight` | `400` | -- |
| `global_line_height` | `1.5rem` | -- |
| `global_border_radius` | `6px` | -- |
| `global_background_color` | `#ffffff` | `#1f252d` |
| `global_font_color` | `#1f2328` | `#b3bdcb` |
| `global_font_secondary_color` | `#8b949e` | `#7d8792` |

## Links and Borders

```toml
[params.appearance]
global_link_color = "#161209"
global_link_color_dark = "#b3bdcb"
global_link_hover_color = "#2983bb"
global_link_hover_color_dark = "#fff"
global_border_color = "#d7dee4"
global_border_color_dark = "#383f47"
```

| Variable | Default (light) | Default (dark) |
| ---------- | --------------- | -------------- |
| `global_link_color` | `#161209` | `#b3bdcb` |
| `global_link_hover_color` | `#2983bb` | `#fff` |
| `global_border_color` | `#d7dee4` | `#383f47` |

## Selection and Scrollbar

```toml
[params.appearance]
selection_color = "rgba(53, 166, 247, 0.25)"
selection_color_dark = "rgba(50, 112, 194, 0.4)"
scrollbar_color = "#a6a6a6"
scrollbar_hover_color = "#7d7d7d"
```

| Variable | Default (light) | Default (dark) |
| ---------- | --------------- | -------------- |
| `selection_color` | `rgba(53, 166, 247, 0.25)` | `rgba(50, 112, 194, 0.4)` |
| `scrollbar_color` | `#a6a6a6` | -- |
| `scrollbar_hover_color` | `#7d7d7d` | -- |

## Header

```toml
[params.appearance]
header_background_color = "#f6f8fa"
header_background_color_dark = "#151b23"
header_title_font_size = "1.375rem"
```

The header title font family defaults to `global_font_family`. The header height is
defined in SCSS as `$header-height: 3.5rem`.

## Menu

```toml
[params.appearance]
menu_active_color_dark = "#fff"
menu_border_color = "#3c3c3c1f"
menu_border_color_dark = "#5454547a"
```

Note: `menu_active_color` defaults to `global_link_color`.

## Search and Tag Cloud

```toml
[params.appearance]
search_background_color = "#e9eaed"
search_background_color_dark = "#202833"
tag_cloud_start_dark = "#909092"
```

Tag cloud colors `tag_cloud_start`, `tag_cloud_end`, and `tag_cloud_end_dark` are
derived from font color variables.

## Code Blocks

```toml
[params.appearance]
code_font_family = "Source Code Pro, Menlo, Consolas, Monaco, monospace"
code_font_size = "0.875em"
code_block_font_size = "0.875rem"
code_color = "#26323d"
code_color_dark = "#c5d1dc"
code_background_color = "#f3f7fb"
code_background_color_dark = "#2a333d"
code_header_color = "#70808f"
code_header_color_dark = "#99a7b5"
code_header_background_color = "#dde6ef"
code_header_background_color_dark = "#161f28"
code_highlight_color = "#fff2b8"
code_highlight_color_dark = "rgba(191, 144, 32, 0.28)"
code_error_color = "#dc3545"
```

## Tables

```toml
[params.appearance]
table_background_color = "#f9fbfe"
table_background_color_dark = "#26303a"
table_thead_color = "#e3ebf4"
table_thead_color_dark = "#3a4653"
table_border_color = "#d4dee8"
table_border_color_dark = "#4b5867"
```

## Content Colors

```toml
[params.appearance]
single_link_color = "#2376b7"
single_link_color_dark = "#1781b5"
single_link_hover_color = "#ea517f"
single_link_hover_color_dark = "#cc5595"
blockquote_color = "#697681"
blockquote_color_dark = "#9ba3aa"
reward_color = "#ff6347"
reward_color_dark = "#ff4d2e"
reward_img_width = "180px"
```

## Pagination and GitHub Corner

```toml
[params.appearance]
pagination_link_color = "#bfbfbf"
pagination_link_hover_color = "#000"
pagination_link_hover_color_dark = "#fff"
github_corner_color = "#ffffff"
github_corner_color_dark = "#000000"
```

Note: `pagination_link_color_dark` derives from `global_font_color_dark`. GitHub corner
fill colors derive from header background colors.

## Font Sizes (TOC, Collections, Related)

```toml
[params.appearance]
toc_title_font_size = "1rem"
toc_content_font_size = "0.875rem"
collection_title_font_size = "1rem"
collection_list_font_size = "0.875rem"
related_title_font_size = "1rem"
related_list_font_size = "0.875rem"
```

## Derived Variables

These variables are automatically computed from other appearance values. Override them
only when you need to break the default relationship.

| Variable | Derived From |
| ---------- | ------------ |
| `header_title_font_family` | `global_font_family` |
| `menu_active_color` | `global_link_color` |
| `tag_cloud_start` | `global_font_color_dark` |
| `tag_cloud_end` | `global_font_color` |
| `tag_cloud_end_dark` | `global_font_color_dark` |
| `pagination_link_color_dark` | `global_font_color_dark` |
| `github_corner_fill` | `header_background_color_dark` |
| `github_corner_fill_dark` | `header_background_color` |

## Page Width

Page width is controlled by `page_style` under `[params.appearance]`:

```toml
[params.appearance]
page_style = "normal"  # narrow | normal | wide | custom
```

Built-in styles:

- **narrow** -- Narrow page/toc width ratio
- **normal** -- Default width ratio
- **wide** -- Larger page/toc width ratio

For a custom page style, use the `page-style` mixin in `assets/scss/custom.scss` and set
`page_style = "custom"`. See [scss-variables.md](scss-variables.md) for mixin details.

For responsive breakpoints, use the `media` mixin. See [scss-variables.md](scss-variables.md)
for breakpoint values and usage.
