# Lruihao Blog

[![Hugo](https://img.shields.io/badge/Hugo-%5E0.109.0-ff4088?style=flat&logo=hugo)](https://gohugo.io/)
[![Hugo build and deploy](https://github.com/Lruihao/hugo-blog/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Lruihao/hugo-blog/actions/workflows/deploy.yml)
[![GitHub commit activity (main)](https://img.shields.io/github/commit-activity/m/Lruihao/hugo-blog/main?style=flat)](https://github.com/Lruihao/hugo-blog/commits/main)

![blog-flow](/assets/images/blog-flow.png)

站名“菠菜眾長”，取“兼收並蓄，博採眾長”之意。[建站](https://lruihao.cn/posts/hello-world/)的初衷不是为了炫耀所知，而是记录无知。

博客内容主要以 Web 前端开发方向为主，分享一些有趣程序、技巧、开发教程、心情和学习记录等。

## Directory structure

```bash
▸ .github/       # GitHub configuration
▸ .scripts/      # custom scripts
▸ .shell/        # shell commands for hugo project, entrance: hugo_main.sh
▸ archetypes/    # page archetypes (like scaffolds of archetypes)
▸ assets/        # css, js, third-party libraries etc.
▸ config/        # configuration files
▸ content/       # markdown files for hugo project
  ▸ private/     # private submodule for encrypted content
▸ data/          # blog data (allow: yaml, json, toml), e.g. friends.yml
▸ public/        # build directory
▸ static/        # static files, e.g. favicon.ico
▸ themes/        # theme submodules
```

## Quick Start

首先点上 Star 😜，然后根据操作系统（Windows、Linux、macOS）安装最新版本的 [Hugo(>= 0.109.0)](https://gohugo.io/installation/)。

```bash
git clone --recursive git@github.com:Lruihao/hugo-blog.git
```

有两种方法可以启动这个博客。

### NPM

```bash
npm install
# build the blog
npm run build
# run a local debugging server with watch
npm run server
# run a local debugging server in production environment
npm run server:production
# update theme submodules
npm run update:theme
```

---

如果没有全局安装 Hugo，甚至可以通过 `npm install hugo-bin --save-dev` 来安装一个 Hugo 的包装器。

`package.json` 需配置 `extended` 版本：

```json
{
  // ...
  "hugo-bin": {
    "buildTags": "extended"
  }
}
```

再通过 `npx hugo` 启动。

### Hugo

```bash
# Development environment
hugo server --disableFastRender --navigateToChanged --bind 0.0.0.0
# Production environment
hugo server --disableFastRender --navigateToChanged --environment production --bind 0.0.0.0
```

此外，还可以运行 `hugo_main.sh` 来选择常用的 Hugo 命令：

```bash
cd .shell && sh hugo_main.sh
```

```text
--------------Hugo Admin--------------
Please enter the serial number to work
--------------------------------------
1. post
2. server
3. server:production
4. build
5. submodule-sync
6. push
--------------------------------------
Press Ctrl+C to stop
```

## [Roadmap](https://github.com/users/Lruihao/projects/1)

## Subscribe

- [RSS](http://lruihao.cn/index.xml)
- Watch on GitHub
- [云+社区](https://cloud.tencent.com/developer/column/94521)

## Powered

- [Hugo](https://github.com/gohugoio/hugo)
- [FixIt](https://github.com/Lruihao/FixIt)

## License

[![License](https://img.shields.io/github/license/Lruihao/hugo-blog?style=flat)](https://github.com/Lruihao/hugo-blog/blob/main/LICENSE)
[![Content License](https://img.shields.io/badge/content_license-CC_BY--NC_4.0-blue?style=flat)](https://creativecommons.org/licenses/by-nc/4.0/)

本站内容采用 [知识共享署名-非商业性使用 4.0（CC BY-NC 4.0）](https://creativecommons.org/licenses/by-nc/4.0/) 国际许可协议。（_`content/private` 除外_）

## Author

[Lruihao](https://github.com/Lruihao "在 GitHub 上关注我")
