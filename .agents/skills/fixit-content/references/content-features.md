<!-- source: fixit-docs/content/en/documentation/content-management/front-matter/index.md -->
<!-- source: fixit-docs/content/en/documentation/content-management/markdown-syntax/extended/index.md -->

# Content Features Reference

## Front Matter

FixIt extends Hugo's front matter with page-specific fields. Use YAML (`---`), TOML (`+++`), or JSON format.

### Hugo Built-in Fields

```yaml
---
title: My Post Title
date: 2024-01-15T10:00:00+08:00
lastmod: 2024-06-01T12:00:00+08:00
draft: false
description: A brief description for SEO and previews.
keywords:
  - hugo
  - fixit
tags:
  - Hugo
  - Tutorial
categories:
  - Documentation
type: post
layout: post
---
```

### FixIt Page-level Fields

These can be set globally in `hugo.toml` under `[params]` and overridden per-page:

```yaml
---
# Appearance
lightgallery: true       # Enable lightgallery for images
ruby: true               # Enable ruby annotation syntax
fraction: true           # Enable fraction syntax
fontawesome: true        # Enable Font Awesome icon syntax
twemoji: true            # Enable Twemoji support
page_style: "default"    # Page style variant

# Behavior
auto_bookmark: true      # Auto bookmark heading on scroll
toc:
  enable: true           # Table of contents
  keepStatic: false
reading_time: true       # Show reading time
word_count: true         # Show word count

# Math
math:
  enable: true           # Enable math rendering
  type: "katex"          # katex or mathjax

# Code
code:
  copy: true             # Copy button on code blocks
  maxShownLines: 10      # Collapse code after N lines

# Encryption (page-level)
password: "1212"         # Page encryption password
message: "Enter password"  # Encryption prompt message
---
```

### Featured Images

```yaml
---
# Method 1: Direct paths
featuredImage: cover.jpg
featuredImagePreview: cover-preview.jpg

# Method 2: Page resources (equivalent)
resources:
  - name: featured-image
    src: cover.jpg
  - name: featured-image-preview
    src: cover-preview.jpg
---
```

Featured images support local resource references in page bundles.

### Visibility Control

```yaml
---
hidden_from_home_page: true    # Hide from homepage listing
hidden_from_search: true       # Hide from search results
hidden_from_related: true      # Hide from related posts
hidden_from_feed: true         # Hide from RSS/Atom/JSON feed
---
```

### Collections

FixIt-specific taxonomy alongside tags and categories:

```yaml
---
collections:
  - Extended Shortcodes
  - Content Management
---
```

### Special Pages (`_index.md`)

```yaml
---
titleIcon: "fa-solid fa-book"   # Icon for page title
cardIcon: "fa-solid fa-tag"     # Icon for taxonomy card (taxonomy _index.md only)
---
```

---

## Extended Markdown

FixIt Flavored Markdown extends standard syntax with additional inline and block elements.

### Alerts (Blockquote Callouts)

13 types, compatible with GitHub/Obsidian/Typora:

```markdown
> [!TIP]
> Helpful information.

> [!WARNING]+ Foldable Warning
> Click to expand.

> [!NOTE]~
> Content-only alert, no title.
```

Full list: note, abstract (summary/tldr), info, todo, tip (hint/important), success (check/done), question (help/faq), warning (caution/attention), failure (fail/missing), danger (error), bug, example, quote (cite).

### Ruby Annotation

```markdown
[FixIt]^(A Clean, Elegant but Advanced Hugo Theme)
```

Renders `<ruby>FixIt<rt>A Clean, Elegant but Advanced Hugo Theme</rt></ruby>`.

### Fraction

```markdown
[Light]/[Dark]
[99]/[100]
```

Renders as stacked fraction display.

### Font Awesome Icons

Use the `:(...): ` syntax with Font Awesome class names:

```markdown
Gone camping! :(fa-solid fa-campground fa-fw): Be back soon.

That is funny! :(fa-regular fa-grin-tears):
```

Requires `fontawesome: true` in front matter or site config.

### Mathematical Formulas

Inline: `$formula$` or `\(formula\)`.
Block: `$$formula$$` or `\[formula\]`.

```tex
Inline: $c = \pm\sqrt{a^2 + b^2}$

Block:
$$
\begin{align}
  a &= b + c \\
  d + e &= f
\end{align}
$$
```

Chemical equations (KaTeX mhchem):

```tex
$$ \ce{CO2 + C -> 2 CO} $$
```

Requires `[params.math] enable = true` in site config.

### Text Formatting Extensions

Require Hugo >= 0.128.0 with extras enabled in `hugo.toml`. Set `strikethrough = false` under `[markup.goldmark.extensions]`, then enable each extension under `[markup.goldmark.extensions.extras]`: `delete`, `insert`, `mark`, `subscript`, `superscript`.

| Feature | Syntax | Output |
| :------ | :----- | :----- |
| Delete | `~~text~~` | ~~text~~ |
| Insert | `++text++` | inserted text |
| Mark | `==text==` | highlighted text |
| Mark (typed) | `==text==[success]` | colored highlight |
| Subscript | `H~2~O` | H2O |
| Superscript | `2^10^` | 2^10 |

Typed marks: `primary`, `secondary`, `success`, `info`, `warning`, `danger`. Custom types via CSS class `.mark-{name}`.

### Task Lists

```markdown
- [x] Completed
- [ ] Unchecked
- [/] In Progress
- [-] Cancelled
- [<] Scheduled
- [>] Rescheduled
- [!] Important
- [?] Question
```

### Color Preview

Backtick color values display inline color swatches:

```markdown
Background: `#0969DA`, `rgb(9, 105, 218)`, `hsl(212, 92%, 45%)`
```

Supported models: HEX (`#RRGGBB`), RGB, HSL.

### Markdown Attributes

Apply CSS classes and attributes to block elements:

```markdown
> A centered blockquote.
{.blockquote-center}

- Item 1
- Item 2
{.text-primary}

---
{.awesome-hr}
```

Attribute position: right of headings/code blocks, below other elements.

### Escape Character

Use `{{X}}` to escape special characters:

```markdown
{{:}}joy{{:}}    --> literal :joy: instead of emoji
[link{{]}}(#url) --> literal [link](#url) instead of link
```

---

## Content Organization

### Page Bundles

Organize content as leaf bundles (single page) or branch bundles (section):

```
content/posts/my-post/
  index.md          # Leaf bundle -- page content
  cover.jpg         # Page resource (referenced as "cover.jpg")
  data/
    chart.yaml      # Nested resource (referenced as "data/chart.yaml")
```

Resources are referenced by filename in shortcodes:

```markdown
{{</* image src="cover.jpg" */>}}
{{</* echarts file="data/chart.yaml" */>}}
```

### Creating Content with Archetypes

```bash
hugo new posts/my-post.md          # Single page
hugo new --kind post-bundle posts/my-bundle/  # Page bundle with resources
```

Archetypes auto-populate front matter with FixIt defaults.

### Local Resource References

Shortcodes that support local resources: `image`, `link`, `music`, `echarts`, `timeline`, `file-tree`. These resolve paths relative to the page bundle first, then fall back to the `assets/` directory.
