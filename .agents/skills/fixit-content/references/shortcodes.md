<!-- source: fixit-docs/content/en/documentation/content-management/shortcodes/extended/introduction/index.md -->

# Extended Shortcodes Reference

FixIt provides 30+ shortcodes on top of Hugo's built-in ones. Use code fence extended syntax (`` ```mermaid ``, `` ```echarts ``, etc.) where available -- it is preferred over the shortcode form.

Override any embedded shortcode by placing a file with the same name in `layouts/_shortcodes/`.

---

## Utility Shortcodes

### script

Insert inline JavaScript that executes after all third-party libraries load.

```markdown
{{</* script */>}}
console.log('Hello FixIt!');
{{</* /script */>}}
```

### style

Insert inline CSS/SCSS. Requires Hugo **extended** version. First param: CSS rules (supports SASS nesting with `&`). Second param: wrapper tag (default `div`).

```markdown
{{</* style "text-align:right; strong{color:#00b1ff;}" */>}}
This is a **right-aligned** paragraph.
{{</* /style */>}}
```

### auto-dark

Wrap content to auto-invert colors for dark mode.

```markdown
{{</* auto-dark */>}}
<img src="/images/logo.svg" alt="logo" />
{{</* /auto-dark */>}}
```

### raw

Prevent Markdown/HTML rendering of content. First param: wrapper tag (default `div`).

```markdown
Raw content: {{</* raw "span" */>}}**Hello** <strong>FixIt</strong>{{</* /raw */>}}
```

### env

Conditionally render content based on Hugo environment.

```markdown
{{</* env "production" */>}}
This only renders in production.
{{</* /env */>}}
```

### version

Display a version badge. Params: tag (required), type (new/changed/deleted/deprecated), URL prefix, project name.

```markdown
{{</* version 1.0.0 */>}}
{{</* version 0.3.15 changed */>}}
```

---

## Layout Shortcodes

### link

Enhanced link with card mode and download support. Positional: href, content, title, card, card-icon.

```markdown
{{</* link "https://github.com/hugo-fixit/FixIt" "FixIt Theme" "visit" true */>}}
{{</* link href="/file.pdf" content="Download" download="file.pdf" */>}}
```

### image

Image shortcode with lightgallery support. Positional: src, alt, caption. Named: `linked`, `loading` (lazy/eager), `optimise`, `cacheRemote`.

```markdown
{{</* image src="/images/photo.jpg" caption="A photo" loading="lazy" */>}}
```

### details

Collapsible HTML `<details>` element. Positional: summary, open, class.

```markdown
{{</* details "Click to expand" true */>}}
Hidden content here.
{{</* /details */>}}
```

### center-quote

Centered blockquote. Also available via admonition `> [!center]` or markdown attribute `{.blockquote-center}`.

```markdown
{{</* center-quote */>}}
Centered text.
{{</* /center-quote */>}}
```

### reward

Donation QR codes. Positional: wechatpay, alipay, paypal, bitcoin, author, comment, mode.

```markdown
{{</* reward wechatpay="/images/wechat.png" alipay="/images/alipay.png" comment="Buy me a coffee" */>}}
```

---

## Content Shortcodes

### admonition

Callout box with 13 types. Positional: type, title, open.

```markdown
{{</* admonition tip "Pro Tip" true */>}}
Useful information here.
{{</* /admonition */>}}
```

**Supported types:** note, abstract (aliases: summary, tldr), info, todo, tip (aliases: hint, important), success (aliases: check, done), question (aliases: help, faq), warning (aliases: caution, attention), failure (aliases: fail, missing), danger (alias: error), bug, example, quote (alias: cite).

Preferred: use blockquote alert syntax for cross-platform compatibility:

```markdown
> [!TIP]+ Foldable title
> Content here.
```

### tabs / tab

Tabbed content container. `tabs` params: `type` (underline/pill/card/segment), `placement` (top/bottom/left/right), `defaultTab`. `tab` params: `title`.

```markdown
{{</* tabs type="card" */>}}
{{%/* tab title="HTML" */%}}<div>Hello</div>{{%/* /tab */%}}
{{%/* tab title="JS" */%}}console.log('hi'){{%/* /tab */%}}
{{</* /tabs */>}}
```

Tabbed code blocks via code fences:

````markdown
```python {group="languages", name="Python"}
print('Hello')
```
```js {group="languages", name="JS", .active}
console.log('Hello');
```
````

### typeit

Typing animation. Params: `tag`, `code` (language for syntax highlighting), `group` (sequential animation), `loop`, `speed`, `cursorSpeed`, `cursorChar`, `duration`.

```markdown
{{</* typeit tag=h4 */>}}
Typing animation text...
{{</* /typeit */>}}
```

Code with syntax highlighting:

```markdown
{{</* typeit code=java */>}}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
{{</* /typeit */>}}
```

Grouped (sequential):

```markdown
{{</* typeit group=grp */>}}First paragraph{{</* /typeit */>}}
{{</* typeit group=grp */>}}Second paragraph (after first finishes){{</* /typeit */>}}
```

### timeline

Chronological events. Data in YAML/JSON/TOML. Params: `reverse`, `animation`, `placement` (top/bottom), `size`, `node` (circle/dot).

```markdown
{{</* timeline animation=true */>}}
events:
  - timestamp: 2024-01-01
    content: "Project started"
    type: primary
  - timestamp: 2024-06-01
    content: "Version 1.0 released"
    type: success
{{</* /timeline */>}}
```

Also available via code fence: `` ```timeline ``.

### file-tree

Interactive directory tree. Data sources (priority): inline body, `file` param, `data` param, filesystem `path`. Params: `level` (expand depth, -1=all, 0=collapse), `folder_slash`, `ignore_list`, `highlight_list`.

```markdown
{{</* file-tree path="src" level=2 */>}}
```

Inline YAML:

```markdown
{{</* file-tree */>}}
- name: src
  type: dir
  children:
    - name: index.ts
      type: file
- name: package.json
  type: file
{{</* /file-tree */>}}
```

Also available via code fence: `` ```file-tree ``.

---

## Media Shortcodes

### mermaid

Diagram rendering. Preferred: `` ```mermaid `` code fence.

```markdown
{{</* mermaid */>}}
graph LR
    A[Start] --> B[End]
{{</* /mermaid */>}}
```

Supports: flowchart, sequence, class, state, ER, journey, gantt, pie, requirement, git graph.

### echarts

Interactive charts. Data in JSON/YAML/TOML/JS. Params: `width`, `height`, `js` (use JS format), `async`, `file`, `data`.

```markdown
{{</* echarts */>}}
{
  "xAxis": { "type": "category", "data": ["A","B","C"] },
  "yAxis": { "type": "value" },
  "series": [{ "type": "bar", "data": [10, 20, 30] }]
}
{{</* /echarts */>}}
```

JS mode (`js=true`): content is a function body returning the option object. Preferred: `` ```echarts `` code fence.

### mapbox

Interactive map. Params: `lng`, `lat`, `zoom`, `marked`, `light-style`, `dark-style`, `markers`, `navigation`.

```markdown
{{</* mapbox 121.473701 31.230416 11 */>}}
```

### music

Music player (APlayer + MetingJS). Three modes: custom URL, auto-detect platform URL, or server/type/id.

```markdown
{{</* music url="/music/song.mp3" name="Song" artist="Artist" cover="/images/cover.jpg" */>}}
{{</* music "https://music.163.com/#/playlist?id=60198" */>}}
```

### aplayer / audio

Advanced APlayer controls with custom playlist and mini mode.

```markdown
{{</* aplayer mini=true */>}}
{{</* audio name="Song" artist="Artist" url="/music/song.mp3" cover="/images/cover.jpg" */>}}
{{</* /aplayer */>}}
```

### spotify

Spotify embed.

```markdown
{{</* spotify "https://open.spotify.com/track/xxx" */>}}
```

### bilibili / douyin

Video embeds.

```markdown
{{</* bilibili BV1xx411c7mD */>}}
{{</* douyin "https://www.douyin.com/video/xxx" */>}}
```

### bluesky

Bluesky post embed.

```markdown
{{</* bluesky "https://bsky.app/profile/xxx/post/xxx" */>}}
```

### gist

GitHub Gist embed. Positional: username, gist-id, filename (optional).

```markdown
{{</* gist Lruihao fb8b2d0353465c4d40bf74818db80710 */>}}
```

---

## Encryption Shortcodes

### fixit-encryptor

Encrypt partial content with a password. Positional: password, message. Supports infinite nesting.

```markdown
{{%/* fixit-encryptor "mypassword" "Enter password to view" */%}}
Secret content here.
{{%/* /fixit-encryptor */%}}
```

For page-level encryption, use front matter `password` and `message` fields. For stronger security, use the `fixit-encrypt` tool (AES-256-GCM) as a post-build step.
