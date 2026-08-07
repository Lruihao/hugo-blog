<!-- source: fixit-docs documentation/getting-started/configuration/introduction -->

# Markup Configuration

Goldmark, Chroma syntax highlighting, render hooks, output formats, and taxonomies.

## Goldmark (Markdown)

Enable extended Markdown syntax: delete, insert, mark, subscript, superscript.

```toml
[markup.goldmark]
[markup.goldmark.extensions]
# ~~strikethrough~~
delete = true
# ++inserted++
insert = true
# ==highlighted==
mark = true
# H~2~O subscript
subscript = true
# X^2^ superscript
superscript = true
# Typographer replaces quotes, dashes, etc.
typographer = true

[markup.goldmark.parser]
# Allow unsafe HTML in Markdown
unsafe = true
# Auto-generate heading IDs
autoHeadingID = true
autoHeadingIDType = "github"

[markup.goldmark.renderer]
# Enable raw HTML in Markdown
unsafe = true
```

## Passthrough for Math

Enable math delimiters so KaTeX/MathJax can process inline and block math.

```toml
[markup.goldmark.extensions.passthrough]
enable = true

[markup.goldmark.extensions.passthrough.delimiters]
inline = [["$", "$"], ["\(", "\)"]]
block = [["$$", $$"], ["\[", "\]"]]
```

## Chroma Syntax Highlighting

FixIt requires these Chroma settings for the code block wrapper to work correctly.

```toml
[markup.highlight]
# Enable code fences
codeFences = true
# Show line numbers
lineNos = true
# Line numbers in a table (better copy behavior)
lineNumbersInTable = true
# Use CSS classes instead of inline styles (required for theme switching)
noClasses = false
# Style for code without classes (fallback)
# noClasses = true would use inline styles
guessSyntax = true
# Max lines before wrapping
lineNosInTable = true
# Tab width
tabWidth = 4
```

The `noClasses = false` setting is critical. It lets FixIt's SCSS control syntax
highlighting colors for both light and dark themes via CSS classes.

## Render Hooks

FixIt provides custom render hooks for enhanced Markdown rendering:

- **Code blocks** -- Custom wrapper with copy, fullscreen, edit buttons
- **Headings** -- Anchor links, numbering, copy-to-clipboard
- **Images** -- Lightgallery integration, lazy loading
- **Links** -- External icon, link guard
- **Tables** -- Responsive wrapper
- **Blockquotes** -- Alert callouts (note, tip, warning, danger)
- **Passthrough** -- Math delimiters for KaTeX/MathJax

These are built into the theme. No configuration needed unless you want to override them
with custom partials in `layouts/_markup/`.

## Output Formats

The theme requires custom output formats for special pages. Include these in your config:

```toml
[outputFormats]

[outputFormats.archives]
path = "archives"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

[outputFormats.offline]
path = "offline"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

[outputFormats.link]
path = "link"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

[outputFormats.manifest]
baseName = "manifest"
mediaType = "application/manifest+json"
isPlainText = true
isHTML = false

[outputFormats.search]
baseName = "search"
mediaType = "application/json"
rel = "search"
isPlainText = true
isHTML = false
permalinkable = true
```

Then configure which outputs to generate:

```toml
[outputs]
home = ["html", "rss", "archives", "search", "offline", "manifest", "link"]
page = ["html", "markdown"]
section = ["html", "rss"]
taxonomy = ["html"]
term = ["html", "rss"]
```

Or use `_merge = "shallow"` to inherit from the theme:

```toml
[outputs]
_merge = "shallow"
```

## Taxonomies

FixIt has three built-in taxonomies: categories, tags, and collections.

```toml
[taxonomies]
category = "categories"
tag = "tags"
collection = "collections"
```

Or inherit from the theme:

```toml
[taxonomies]
_merge = "shallow"
```

Use in front matter:

```yaml
---
tags: ["Hugo", "Tutorial"]
categories: ["Documentation"]
collections: ["Getting Started"]
---
```

## Taxonomy Icons

Override icons for taxonomy title, card, and term title slots.

```toml
[params.taxonomy_icons]
# Syntax: <taxonomy> = [<title icon>, <card icon>, <term title icon>]
category = [
  "fa-solid fa-folder-tree",
  "fa-regular fa-folder",
  "fa-regular fa-folder-open"
]
```

Requires `[taxonomies]` to be configured first.

## Table Configuration

```toml
[markup.table]
# Enable sortable tables
# Not built-in, use shortcodes or custom partials
```

FixIt wraps tables in a responsive container automatically.

## Goldmark Extensions Checklist

| Extension | Syntax | Example |
| ----------- | -------- | --------- |
| Delete | `~~text~~` | ~~deleted~~ |
| Insert | `++text++` | ++inserted++ |
| Mark | `==text==` | ==highlighted== |
| Subscript | `H~2~O` | H~2~O |
| Superscript | `X^2^` | X^2^ |
