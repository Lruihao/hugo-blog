<!-- source: fixit-docs/content/en/documentation/content-management/markdown-syntax/extended/index.md -->
<!-- source: FixIt/layouts/_markup/ -->

# Render Hooks Reference

FixIt provides 7 render hooks that extend Hugo's default Markdown rendering. These hooks intercept specific Markdown elements and apply custom HTML output with FixIt features.

---

## render-codeblock

Intercepts fenced code blocks. Default behavior adds copy button, line numbers, and syntax highlighting. Specialized renderers activate for specific language identifiers.

### Standard code blocks

````markdown
```python {title="example.py", linenos=true, hl_lines=[2]}
def hello():
    print("Hello FixIt!")
    return True
```
````

**Options via markdown attributes:**

| Option | Description | Type |
| :----- | :---------- | :--- |
| `title` | Code block title | `string` |
| `name` | Tab item name (for grouped tabs) | `string` |
| `group` | Tab group name | `string` |
| `filename` | Code block filename | `string` |
| `linenos` | Show line numbers | `bool` |
| `hl_lines` | Highlight lines | `array` |
| `max_shown_lines` | Collapse after N lines | `int` |
| `shadow` | Shadow style (`hover`) | `string` |
| `.line-wrapping` | Enable line wrapping | class |

### Specialized code fence renderers

These language identifiers trigger dedicated renderers instead of syntax highlighting:

| Language | Description |
| :------- | :---------- |
| `mermaid` | Diagrams (flowchart, sequence, gantt, pie, etc.) |
| `echarts` | Interactive charts (JSON, YAML, TOML, or JS object literal) |
| `file-tree` | Interactive directory tree from inline YAML |
| `json` | Collapsible JSON viewer |
| `timeline` | Chronological event display from inline YAML |
| `toggle` | Config toggle for TOML/YAML/JSON (use `{toggle=true}` attribute) |

Example -- mermaid code fence:

````markdown
```mermaid
graph TD
    A[Client] --> B[Server]
    B --> C[Database]
```
````

Example -- echarts code fence:

````markdown
```echarts
{
  "xAxis": { "type": "category", "data": ["Mon","Tue","Wed"] },
  "yAxis": { "type": "value" },
  "series": [{ "type": "line", "data": [150, 230, 224] }]
}
```
````

### Tabbed code blocks

Group code blocks into tabs using `group` and `name`:

````markdown
```python {group="example", name="Python"}
print("Hello")
```
```js {group="example", name="JavaScript", .active}
console.log("Hello");
```
````

Use `.active` class to set the default tab.

---

## render-heading

Adds anchor links to headings. Configurable via `[params.page.headingAnchor]`.

```markdown
## My Section {#custom-id}
```

The rendered heading includes a clickable anchor icon for deep linking.

---

## render-image

Enhances Markdown images with lazy loading and optimization.

```markdown
![Alt text](/images/photo.jpg "Image title")
```

Features applied automatically:

- Lazy loading (`loading="lazy"`)
- Image optimization (when configured)
- Lightgallery integration (zoom on click when `lightgallery: true` in front matter)
- Responsive sizing

---

## render-link

Enhances Markdown links with external icon detection and link guard.

```markdown
[External link](https://example.com)
[Internal link](/posts/my-post)
```

Features applied automatically:

- External link icon (auto-detected)
- `target="_blank"` and `rel="noopener"` for external links
- Link guard for configured URL patterns (redirect page before leaving)

---

## render-table

Wraps tables in a responsive container for horizontal scrolling on small screens.

```markdown
| Column A | Column B | Column C |
| :------- | :------: | -------: |
| Left     |  Center  |    Right |
```

No special syntax needed -- all Markdown tables get the responsive wrapper automatically.

---

## render-blockquote-alert

Converts blockquote alert syntax into styled admonition banners. Compatible with GitHub, Obsidian, and Typora syntax.

### Syntax

Supports 13 types: `note`, `abstract`, `info`, `todo`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`. Compatible with GitHub, Obsidian, and Typora.

```markdown
> [!TIP] Custom Title
> Content with a custom title.

> [!WARNING]+ Foldable
> This alert is foldable. Click to expand/collapse.

> [!NOTE]- Collapsed by default
> Hidden until expanded.

> [!TIP]~
> Content-only alert (no title bar).
```

**Alert sign:** `+` = expanded by default, `-` = collapsed by default, `~` = content-only (no title).

### Nesting

```markdown
> [!question] Can alerts be nested?
> > [!todo] Yes, they can.
> > > [!example] Multiple layers work.
```

---

## render-passthrough

Processes math passthrough delimiters for KaTeX/MathJax rendering.

### Inline math

```tex
$c = \pm\sqrt{a^2 + b^2}$

\(f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi\)
```

### Block math

```tex
$$
\begin{align}
  a &= b + c \\
  d + e &= f
\end{align}
$$
```

### Chemical equations (KaTeX mhchem extension)

```tex
$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$
```

Requires `[params.math] enable = true` and passthrough delimiters configured in `hugo.toml`.
