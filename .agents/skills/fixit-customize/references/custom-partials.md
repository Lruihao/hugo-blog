<!-- Source: https://github.com/hugo-fixit/FixIt/blob/master/layouts/_partials/custom.html -->

# Custom Partials Reference

FixIt provides 15 named injection points ("custom blocks") for extending the theme
without modifying its source templates. This avoids upgrade conflicts when the theme
updates.

## Injection Points

| Block Name | Config Key | Location | Purpose |
| ----------- | ------------ | ---------- | --------- |
| `custom-head` | `head` | `layouts/baseof.html` | HTML `<head>` additions (meta, link, script) |
| `custom-menu:desktop` | `menu_desktop` | `layouts/_partials/layouts/header.html` | Desktop navigation menu items |
| `custom-menu:mobile` | `menu_mobile` | `layouts/_partials/layouts/header.html` | Mobile navigation menu items |
| `custom-profile` | `profile` | `layouts/_partials/home/profile.html` | Homepage profile section |
| `custom-aside` | `aside` | `layouts/posts/single.html` | Post sidebar content |
| `custom-comment` | `comment` | `layouts/_partials/layouts/comment.html` | Comment system integration |
| `custom-footer` | `footer` | `layouts/_partials/layouts/footer.html` | Site footer content |
| `custom-widgets` | `widgets` | `layouts/_partials/layouts/widgets.html` | Widget panel content |
| `custom-assets` | `assets` | `layouts/_partials/layouts/assets.html` | CSS/JS asset loading |
| `custom-post__toc:before` | `post_toc_before` | `layouts/posts/single.html` | Before table of contents |
| `custom-post__toc:after` | `post_toc_after` | `layouts/posts/single.html` | After table of contents |
| `custom-post__content:before` | `post_content_before` | `layouts/posts/single.html` | Before post content |
| `custom-post__content:after` | `post_content_after` | `layouts/posts/single.html` | After post content |
| `custom-post__footer:before` | `post_footer_before` | `layouts/posts/single.html` | Before post footer |
| `custom-post__footer:after` | `post_footer_after` | `layouts/posts/single.html` | After post footer |

## Method 1: Config-based (Recommended)

Create partial files in `layouts/_partials/` and reference them in `hugo.toml`.
Partials must be stored under `/layouts/_partials/`.

```toml
# hugo.toml
[params.custom_partials]
head = ["custom/head-meta.html"]
assets = ["inject/component-projects.html"]
profile = ["custom/profile.html"]
footer = ["custom/footer-links.html"]
post_content_after = ["custom/share-buttons.html"]
```

All partials in a block receive the page context (`.`) as their argument.

### Example: Add Custom Meta to Head

Create `layouts/_partials/custom/head-meta.html`:

```go-template
{{- /* Custom meta tags */ -}}
<meta name="author" content="{{ .Site.Author.name }}">
<link rel="preconnect" href="https://fonts.googleapis.com">
```

```toml
[params.custom_partials]
head = ["custom/head-meta.html"]
```

### Example: Add Content After Post Body

Create `layouts/_partials/custom/share-buttons.html`:

```go-template
{{- /* Share buttons after post content */ -}}
<div class="custom-share">
  <a href="https://twitter.com/intent/tweet?url={{ .Permalink }}" target="_blank">
    Share on Twitter
  </a>
</div>
```

```toml
[params.custom_partials]
post_content_after = ["custom/share-buttons.html"]
```

### Example: Inject a Theme Component

```toml
[params.custom_partials]
assets = ["inject/component-projects.html"]
```

## Method 2: Define Block Override

Copy `layouts/_partials/custom.html` from the theme to your project and use Hugo's
`define` blocks. This gives full control but requires manual updates when the theme
changes.

```bash
cp themes/FixIt/layouts/_partials/custom.html layouts/_partials/custom.html
```

Then add content directly inside the `define` blocks:

```go-template
{{- define "custom-footer" -}}
  <div class="my-footer">
    <p>Built with FixIt theme</p>
  </div>
{{- end -}}
```

## Multiple Partials per Block

Each config key accepts an array. Partials are rendered in order:

```toml
[params.custom_partials]
head = [
  "custom/analytics.html",
  "custom/meta-tags.html",
  "custom/custom-css.html",
]
assets = [
  "inject/component-projects.html",
  "custom/extra-js.html",
]
```

## Context Available in Partials

Each partial receives the page context. Common template variables:

| Variable | Description |
| ---------- | ------------- |
| `.Page` | Current page object |
| `.Site` | Site configuration |
| `.Site.Params` | All `[params]` from `hugo.toml` |
| `.Permalink` | Current page URL |
| `.Title` | Current page title |
| `.IsHome` | Whether this is the homepage |
| `.IsPage` | Whether this is a regular page |

Access custom params:

```go-template
{{- $myParam := .Site.Params.custom_param | default "fallback" -}}
```

## Best Practices

- Store custom partials in a `custom/` subdirectory to separate them from theme partials
- Use the config method for most customizations; use the define block method only when you need to replace the entire block content
- Keep partials focused on a single responsibility
- Use `partialCached` for expensive partials that do not change per page
- Check `hugo.IsProduction` before adding analytics or tracking scripts
