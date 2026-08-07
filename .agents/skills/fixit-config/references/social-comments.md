<!-- source: fixit-docs documentation/getting-started/configuration/params -->

# Social Links, Comments, Share & Analytics

Social platform links, comment systems, share buttons, donate/reward, and analytics.

## Social Links

Set the platform ID (username or URL) to show the icon. Supports 80+ platforms.

```toml
[params.social]
GitHub = "your-username"
Linkedin = "your-username"
Twitter = "your-username"
Instagram = "your-username"
Facebook = "your-username"
Telegram = "your-username"
Medium = "your-username"
Mastodon = "https://mastodon.social/@you"
Youtubechannel = "your-channel-id"
Bilibili = "your-uid"
Zhihu = "your-username"
Douban = "your-username"
Discord = "your-username"
Bluesky = "your-username"
ORCID = "0000-0000-0000-0000"
Googlescholar = "your-scholar-id"
Researchgate = "your-username"
Ko-Fi = "your-username"
BuyMeaCoffee = "your-username"
Email = "you@example.com"
RSS = true
```

### Custom Social Link

Add platforms not in the built-in list:

```toml
[params.social.twitter]
id = "your-username"
weight = 3
prefix = "https://x.com/"
title = "X"

[params.social.twitter.icon]
class = "fa-brands fa-x-twitter"
```

### Full Platform List

Common platforms: GitHub, Linkedin, Twitter, Instagram, Facebook, Telegram, Medium,
Gitlab, Youtubelegacy, Youtubecustom, Youtubechannel, Tumblr, Quora, Keybase,
Pinterest, Reddit, Codepen, FreeCodeCamp, Bitbucket, Stackoverflow, Weibo,
Odnoklassniki, VK, Flickr, Xing, Snapchat, Soundcloud, Spotify, Bandcamp, Paypal,
Fivehundredpx, Mix, Goodreads, Lastfm, Foursquare, Hackernews, Kickstarter, Patreon,
Steam, Twitch, Strava, Skype, Whatsapp, Zhihu, Douban, Angellist, Slidershare,
Jsfiddle, Deviantart, Behance, Dribbble, Wordpress, Vine, Googlescholar,
Researchgate, Mastodon, Thingiverse, Devto, Gitea, XMPP, Matrix, Bilibili, ORCID,
Liberapay, Ko-Fi, BuyMeaCoffee, Linktree, QQ, QQGroup, Diaspora, CSDN, Discord,
DiscordInvite, Lichess, Pleroma, Kaggle, MediaWiki, Plume, HackTheBox, RootMe,
Feishu, TryHackMe, Douyin, TikTok, Credly, Bluesky, Phone, Email, RSS.

## Comment Systems

Enable one comment system at a time. Set `params.comment.enable = true` and configure
your chosen provider.

### Giscus (GitHub Discussions)

```toml
[params.comment]
enable = true

[params.comment.giscus]
enable = true
repo = "owner/repo"
repo_id = "R_xxxxx"
category = "Announcements"
category_id = "DIC_xxxxx"
mapping = "pathname"
origin = "https://giscus.app"
strict = "0"
reactions_enabled = "1"
emit_metadata = "0"
input_position = "bottom"
lang = ""
light_theme = "light"
dark_theme = "dark"
lazy_load = true
```

Get your Giscus config from https://giscus.app/.

### Waline

```toml
[params.comment]
enable = true

[params.comment.waline]
enable = true
server_url = "https://your-waline-server.vercel.app"
pageview = false
emoji = ["//unpkg.com/@waline/emojis@1.1.0/weibo"]
meta = ["nick", "mail", "link"]
required_meta = []
login = "enable"
word_limit = 0
page_size = 10
image_uploader = false
reaction = false
```

### Twikoo

```toml
[params.comment.twikoo]
enable = true
env_id = "your-env-id"
region = ""
visitor = true
comment_count = true
```

### Utterances (GitHub Issues)

```toml
[params.comment.utterances]
enable = true
repo = "owner/repo"
issue_term = "pathname"
label = ""
light_theme = "github-light"
dark_theme = "github-dark"
```

### Artalk

```toml
[params.comment.artalk]
enable = true
server = "https://your-artalk-server"
site = "My Site"
placeholder = "Leave a comment..."
nest_max = 2
vote = true
ua_badge = true
img_upload = true
preview = true
```

### Disqus

```toml
[params.comment.disqus]
enable = true
shortname = "your-disqus-shortname"
```

### Gitalk

```toml
[params.comment.gitalk]
enable = true
owner = "your-github-username"
repo = "your-repo"
client_id = "your-client-id"
client_secret = "your-client-secret"
```

### Valine (LeanCloud)

```toml
[params.comment.valine]
enable = true
app_id = "your-leancloud-app-id"
app_key = "your-leancloud-app-key"
placeholder = "Leave a comment..."
avatar = "mp"
visitor = true
```

## Share Buttons

Control which share buttons appear on post pages.

```toml
[params.share]
enable = true
Twitter = true
Facebook = true
Reddit = true
Weibo = true
Linkedin = true
# Also available: Whatsapp, Pinterest, Tumblr, HackerNews, VK, Buffer,
# Xing, Line, Instapaper, Pocket, Flipboard, Blogger, Baidu, etc.
```

## Reward / Donate

Show QR codes for donations at the bottom of posts.

```toml
[params.reward]
enable = true
animation = false
position = "after"   # "before" or "after"
mode = "static"      # "static" or "fixed" (click to toggle)

[params.reward.ways]
comment = "Buy me a coffee"
wechatpay = "/images/wechatpay.png"
alipay = "/images/alipay.png"
paypal = "/images/paypal.png"
bitcoin = "/images/bitcoin.png"
```

## Analytics

Enable site analytics. Set `params.analytics.enable = true` and configure one provider.

```toml
[params.analytics]
enable = true

[params.analytics.google]
id = "G-XXXXXXXXXX"
anonymize_ip = true

[params.analytics.baidu]
id = "your-baidu-tracking-id"

[params.analytics.umami]
data_website_id = "your-website-id"
src = "https://your-umami-instance.com/umami.js"
data_host_url = ""
data_domains = ""

[params.analytics.plausible]
data_domain = "example.com"
src = "https://plausible.io/js/script.js"

[params.analytics.cloudflare]
token = "your-cloudflare-token"
```

## Site Verification

Submit verification codes for search engines.

```toml
[params.verification]
google = "your-google-verification-code"
bing = "your-bing-verification-code"
yandex = "your-yandex-verification-code"
pinterest = "your-pinterest-verification-code"
baidu = "your-baidu-verification-code"
so = "your-360-verification-code"
sogou = "your-sogou-verification-code"
```

## SEO Configuration

```toml
[params.seo]
cover = "/images/cover.png"

[params.seo.publisher]
name = "Your Site Name"
logo_url = "/images/logo.png"
```

## Cookie Consent

```toml
[params.cookieconsent]
enable = true
```

## CDN Configuration

Use a CDN for third-party libraries instead of vendored files.

```toml
[params.cdn]
data = "jsdelivr.yml"  # or "unpkg.yml"
```
