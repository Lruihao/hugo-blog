
[![GitHub commit activity (main)](https://img.shields.io/github/commit-activity/m/Lruihao/hugo-blog/main?style=flat-square)](https://github.com/Lruihao/hugo-blog/commits/main)
[![Hugo](https://img.shields.io/badge/Hugo-%5E0.62.0-ff4088?style=flat-square&logo=hugo)](https://gohugo.io/)
[![License](https://img.shields.io/github/license/Lruihao/hugo-blog?style=flat-square)](https://github.com/Lruihao/hugo-blog/blob/main/LICENSE)

## Directory structure

```bash
▸ .github/       # GitHub configuration
▸ _localadmin/   # shell command for hugo project, entrance: hugo_main.sh
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

3. Run `hugo_main.sh`

    ```bash
    cd hugo-blog/_localadmin
    sh hugo_main.sh
    ```
    
    ```bash
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

## Author

[Lruihao](https://lruihao.cn)