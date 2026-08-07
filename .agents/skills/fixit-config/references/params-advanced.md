<!-- source: fixit-docs documentation/getting-started/configuration/params -->

# Params Advanced

Code blocks, math rendering, diagrams, maps, encryption, watermark, visitor counters,
heading numbering, AI features, and more.

## Code Block

The code block wrapper adds copy, fullscreen, download, and edit buttons to fenced code blocks.
Override per-block via Markdown attributes: `` ```lang {mode="mac", max_shown_lines=5} ``

```toml
[params.codeblock]
wrapper = true
# "classic" (header bar), "mac" (macOS style), "simple"
mode = "classic"
# Additional CSS classes
wrapper_class = ""
# Lines shown before "show more" kicks in
max_shown_lines = 10
# Shadow effect: "always", "hover", "never"
shadow = "never"
copyable = true
downloadable = false
fullscreen = false
line_nos_toggler = true
line_wrap_toggler = true
# Experimental inline editing
editable = false
```

## Math Rendering

Choose KaTeX (faster, server-side) or MathJax (more features, client-side).

```toml
[params.math]
enable = true
type = "katex"  # or "mathjax"

[params.math.katex]
copy_tex = true
throw_on_error = false
error_color = "#ff4949"

[params.math.katex.macros]
# Custom macro: usage $\f{a}{b}$
"\\f" = "#1f(#2)"
```

MathJax configuration (use when `type = "mathjax"`):

```toml
[params.math.mathjax]
cdn = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"

[params.math.mathjax.macros]
bold = ["{\\bf #1}", 1]

[params.math.mathjax.loader]
load = ["ui/safe"]

[params.math.mathjax.options]
enable_menu = true
```

Enable math per-page via front matter:

```yaml
---
math:
  enable: true
---
```

## Mermaid Diagrams

```toml
[params.mermaid]
wrapper = true
cdn = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs"
# Enable ZenUML support (set CDN URL or leave empty)
zenuml = ""
themes = ["default", "dark"]
security_level = "loose"
# "classic" or "handDrawn"
look = "handDrawn"
font_family = ""
# ELK layout engine (optional)
layout_loaders = []
layout = "dagre"
```

Use the `mermaid` shortcode in content:

```markdown
{{< mermaid >}}
graph LR
    A[Start] --> B[End]
{{< /mermaid >}}
```

## Mapbox GL JS

```toml
[params.mapbox]
access_token = "your-mapbox-access-token"
light_style = "mapbox://styles/mapbox/light-v11"
dark_style = "mapbox://styles/mapbox/dark-v11"
navigation = true
geolocate = true
scale = true
fullscreen = true
```

Use the `mapbox` shortcode in content.

## Encryption

FixIt supports partial content encryption via the `fixit-decryptor` library.
Configure in front matter, not in `hugo.toml`:

```yaml
---
title: "Encrypted Post"
password: "my-secret-password"
---
```

Wrap content to encrypt with the `encryption` shortcode:

```markdown
{{< encryption >}}
This content is encrypted.
{{< /encryption >}}
```

## Watermark

Overlay a text watermark on the entire page.

```toml
[params.watermark]
enable = true
content = "Confidential"
opacity = 0.1
width = 150
height = 20
row_spacing = 60
col_spacing = 30
rotate = 15
font_size = 0.85
font_family = "inherit"
```

## Busuanzi Visitor Counter

```toml
[params.busuanzi]
enable = true
source = "https://vercount.one/js"
site_views = true
page_views = true
```

## Heading Numbering

Auto-number headings (e.g., "2.1 Section Title"). Requires `params.toc.ordered = true`.

```toml
[params.toc]
ordered = true

[params.heading]
capitalize = false

[params.heading.number]
enable = true
only_main_section = true

[params.heading.number.format]
h1 = "{title}"
h2 = "{h2} {title}"
h3 = "{h2}.{h3} {title}"
h4 = "{h2}.{h3}.{h4} {title}"
h5 = "{h2}.{h3}.{h4}.{h5} {title}"
h6 = "{h2}.{h3}.{h4}.{h5}.{h6} {title}"
```

## Table of Contents

```toml
[params.toc]
enable = true
# Keep static TOC in front of post (in addition to sidebar)
keep_static = false
# Auto-collapse sidebar TOC
auto = true
position = "right"  # "left" or "right"
ordered = false
start_level = 2
end_level = 6
# Decrease H1 to H2 in content
decrease_h1 = false
```

## PostChat AI

AI-powered chatbot based on your site content.

```toml
[params.post_chat]
enable = true
key = "your-postchat-key"
# "iframe" (popup) or "magic" (floating button)
user_mode = "iframe"
add_button = true
default_input = false
upload_web = true
show_invite_link = true
default_chat_questions = ["What topics do you cover?"]
default_search_questions = []
```

## Post Summary AI

AI-generated summaries at the top of posts.

```toml
[params.post_summary]
enable = true
key = "your-key"  # Uses post_chat.key if not set
title = "AI Summary"
theme = ""  # "", "simple", "yanzhi", "menghuan"
word_limit = 1000
typing_animate = true
beginning_text = ""
loading_text = true
```

## Appearance (SCSS Overrides)

Override theme colors and fonts. Values must be hex format (e.g., `"#ff0000"`),
not CSS named colors.

```toml
[params.appearance]
global_font_family = ""
global_font_size = ""
global_line_height = ""
global_border_radius = ""
global_background_color = ""
global_font_color = ""
global_link_color = ""
global_link_hover_color = ""
header_background_color = ""
header_title_font_size = ""
code_font_family = ""
code_background_color = ""
# Dark mode variants
global_background_color_dark = ""
global_font_color_dark = ""
global_link_color_dark = ""
```

## Reading Progress Bar

```toml
[params.reading_progress]
enable = true
start = "left"
position = "top"  # "top" or "bottom"
reversed = false
height = "2px"
# Custom colors (empty = theme default)
light = ""
dark = ""
```

## Pace Loading Bar

```toml
[params.pace]
enable = true
color = "blue"  # black, blue, green, orange, pink, purple, red, silver, white, yellow
theme = "minimal"
```

## Custom Partials

Inject custom templates at specific hook points.

```toml
[params.custom_partials]
head = ["custom/head.html"]
footer = ["custom/footer.html"]
assets = ["custom/assets.html"]
```
