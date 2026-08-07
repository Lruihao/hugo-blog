<!-- source: fixit-docs documentation/getting-started/configuration/params -->

# Params Basics

Site-level parameters, author configuration, page-level defaults, date and image settings.

## Site-Level Params

These apply to the entire site and cannot be overridden per-page.

```toml
[params]
# FixIt theme version (match your installed version)
version = "1.0.X"
# Site description for SEO and Open Graph
description = "My awesome Hugo site"
# Site keywords for SEO
keywords = ["Hugo", "FixIt", "Blog"]
# Default theme: "light", "dark", or "auto" (follows system)
default_theme = "auto"
# SRI hash function: "sha256", "sha384", "sha512", "md5", or "" to disable
fingerprint = ""
# Go date format string
date_format = "2006-01-02"
# Open Graph / Twitter Card images (relative to site root)
images = ["/images/og-cover.png"]
# Append site title to every page title
with_site_title = true
# Delimiter between page title and site title
title_delimiter = "-"
# Add subtitle to index page title
index_with_subtitle = false
# Merge missing translations from other languages (set true for multilingual sites)
enable_translation_merge = false
# Tooltip for elements with title attribute (e.g. footnotes)
tooltip = true
# Disable theme meta tag injection on home page
disable_theme_inject = false
```

## Author Configuration

```toml
[params.author]
name = "John Doe"
email = "john@example.com"
link = "https://johndoe.com"
avatar = "/images/avatar.png"
```

The author avatar appears on posts and the home page profile. If `params.gravatar.enable`
is true and an email is set, Gravatar takes precedence over the local avatar.

## Page-Level Params

These can be set in `[params]` as site-wide defaults, and overridden per-page via front matter.

```toml
[params]
# Capitalize page titles
capitalize_titles = true
# Show author avatar on posts
author_avatar = true
# Enable lightgallery for images with titles (true), force all images ("force"), or disable (false)
lightgallery = false
# Ruby annotation syntax: {ruby base}(ruby text)
ruby = true
# Fraction syntax: 1/2 becomes a fraction
fraction = true
# FontAwesome icon syntax: :fa-solid fa-star:
fontawesome = true
# License text shown at the bottom of posts (HTML supported)
license = '<a rel="license external nofollow noopener noreferrer" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>'
# Page width style: "narrow", "normal", "wide"
page_style = "normal"
# Save reading progress when closing page
auto_bookmark = false
# Show last modified time
show_lastmod = true
# Show word count
word_count = true
# Show estimated reading time
reading_time = true
# Enable instant.page prefetching
instant_page = false
# Hide page from home page listing
hidden_from_home_page = false
# Hide page from search results
hidden_from_search = false
# Hide page from related posts
hidden_from_related = false
# Hide page from RSS/Atom/JSON feed
hidden_from_feed = false
# Enable twemoji
twemoji = false
# Collection list in sidebar
collection_list = false
# Collection navigation at end of post
collection_navigation = false
```

### Per-Page Front Matter Override

```yaml
---
title: "My Post"
lightgallery: true
math:
  enable: true
comment:
  enable: false
hidden_from_home_page: true
---
```

## Date Configuration

Hugo's built-in date handling. The `date_format` param controls display format.

```toml
[params]
# Use ISO-style date format
date_format = "2006-01-02"
# Or: "Jan 02, 2006" for US style
# Or: "02/01/2006" for EU style

[frontmatter]
lastmod = ["lastmod", ":git", ":fileModTime", ":default"]
```

## Image Configuration

Combined with Hugo's `imaging` settings for optimization.

```toml
[imaging]
quality = 75

[params.image]
# Cache remote images locally (useful for optimization)
cache_remote = false
# Enable image resizing/optimization (may slow builds)
optimise = false
# Exclude specific images from optimization
black_list = ["no-optimize.jpg", "*.tiff"]
```

## Gravatar Configuration

```toml
[params.gravatar]
enable = false
# Use Cravatar for China: "cravatar.cn"
host = "www.gravatar.com"
# Style: "", "mp", "identicon", "monsterid", "wavatar", "retro", "blank", "robohash"
style = ""
```

## Git Info

Configure public Git repository links shown on posts (edit, source, report issue).

```toml
enableGitInfo = true

[params.git_info]
repo = "https://github.com/yourname/yourrepo"
branch = "main"
dir = "content"
# Issue template with placeholders: {title}, {URL}, {sourceURL}
issue_tpl = "title=[BUG]%20{title}&body=|Field|Value|%0A|-|-|%0A|Title|{title}|%0A|URL|{URL}|%0A|Filename|{sourceURL}|"
```

## Post Link Buttons

Control which footer links appear on posts.

```toml
[params.post_link]
markdown = true   # Link to raw markdown
source = true     # Link to view source (requires git_info.repo)
edit = true       # Link to edit on GitHub (requires git_info.repo)
report = true     # Link to report issue (requires git_info.repo)
editor = "vscode" # Open-in-editor protocol ("vscode", "trae", etc.)
```

## Expiration Reminder

Warn readers when content is outdated.

```toml
[params.expiration_reminder]
enable = true
reminder = 90     # Show reminder if lastmod > 90 days ago
warning = 180     # Show warning if lastmod > 180 days ago
close_comment = false
```
