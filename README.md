
[![GitHub commit activity (main)](https://img.shields.io/github/commit-activity/m/Lruihao/hugo-blog/main?style=flat)](https://github.com/Lruihao/hugo-blog/commits/main)
[![Hugo](https://img.shields.io/badge/Hugo-%5E0.84.0-ff4088?style=flat&logo=hugo)](https://gohugo.io/)
[![License](https://img.shields.io/github/license/Lruihao/hugo-blog?style=flat)](https://github.com/Lruihao/hugo-blog/blob/main/LICENSE)

> A markdown blog project base on Hugo and theme FixIt.

## 

## Directory structure

```bash
▸ .github/       # GitHub configuration
▸ .shell/        # shell commands for hugo project, entrance: hugo_main.sh
▸ archetypes/    # page archetypes (like scaffolds of archetypes)
▸ assets/        # css, js, third-party libraries etc.
▸ content/       # blog source of hugo project
▸ data/          # blog data (allow: yaml, json, toml), e.g. friends.yml
▸ i18n/          # i18n translation documents
▸ layouts/       # page layouts source
▸ public/        # build directory
▸ static/        # static files, e.g. favicon.ico
▸ themes/        # theme submodules
  config.toml    # configuration of hugo project (like _config.yml of hexo)
```

## Installation

1. Go to [Hugo Releases](https://github.com/gohugoio/hugo/releases) and download the lastest `hugo_extended` version, e.g.
   
    - `hugo_extended_0.88.1_Windows-64bit.zip`
    - `hugo_extended_0.88.1_macOS-ARM64.tar.gz`

2. Clone the blog source

    ```bash
    git clone --recursive git@github.com:Lruihao/hugo-blog.git hugo-blog
    ```

## Start-up

There are three ways to start this blog.

### Hugo

```bash
# Development environment
hugo server --disableFastRender --navigateToChanged
# Production environment
hugo server --disableFastRender --navigateToChanged --environment production
```

## Shell

Run `hugo_main.sh` to choice frequently-used Hugo commands:

```bash
cd hugo-blog/_scripts
sh hugo_main.sh
```

```
--------------Hugo Admin--------------
Please enter the serial number to work
--------------------------------------
1. new
2. start
3. start-production
4. build
5. submodule-sync
6. push
--------------------------------------
Press Ctrl+C to stop
```

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
npm run update-theme
```

## Author

[Lruihao](https://lruihao.cn)