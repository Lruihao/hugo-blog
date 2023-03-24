# Lruihao Blog (Hugo)

[![Hugo](https://img.shields.io/badge/Hugo-%5E0.109.0-ff4088?style=flat&logo=hugo)](https://gohugo.io/)
[![License](https://img.shields.io/github/license/Lruihao/hugo-blog?style=flat)](https://github.com/Lruihao/hugo-blog/blob/main/LICENSE)
[![Hugo build and deploy](https://github.com/Lruihao/hugo-blog/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Lruihao/hugo-blog/actions/workflows/deploy.yml)
[![GitHub commit activity (main)](https://img.shields.io/github/commit-activity/m/Lruihao/hugo-blog/main?style=flat)](https://github.com/Lruihao/hugo-blog/commits/main)

![blog-flow](/assets/images/blog-flow.png)

> 《菠菜眾長》，这是一个前端程序猿的技术博客, 基于 [Hugo](https://github.com/gohugoio/hugo) 和 [FixIt](https://github.com/Lruihao/FixIt) 主题搭建，主要记录和分享一些 Web 前端开发工作学习中遇到的问题和知识点。

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

只需根据操作系统（Windows、Linux、macOS）安装最新版本的 [Hugo(>= 0.109.0)](https://gohugo.io/installation/)。

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
  ...
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

## 作者

[Lruihao](https://github.com/Lruihao "在 GitHub 上关注我")
