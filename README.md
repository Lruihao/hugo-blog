## Directory

```bash
▸ .github/       # Github Actions Config
▸ _localadmin/   # hugo 本地管理 shell 脚本工具，入口 hugo_main.sh
▸ archetypes/    # 配置文章模板，相当于 hexo 的 scaffolds
▸ assets/        # 三方插件源码，改造主题可不动主题源码
▸ content/       # 文章页面内容，相当于 hexo 的 source
▸ data/          # 可存放一些 yaml, json, toml 格式的数据
▸ i18n/          # i18n 语言翻译文件
▸ layouts/       # 页面布局源码，改造主题可不动主题源码
▸ public/        # 生成的博客静态文件子模组
▸ static/        # 静态文件存放
▸ themes/        # 主题子模组存放区
  config.toml    # 站点配置文件，相当于 hexo 的 _config.yml
```

## Installation

1. Go to [Hugo Releases](https://github.com/gohugoio/hugo/releases) and download `hugo_extended` version, e.g. hugo_extended_0.88.1_Windows-64bit.zip

2. Clone the blog source

   ```bash
   git clone --recursive git@github.com:Lruihao/hugo-blog.git hugo-blog
   cd hugo-blog
   ```

3. Run hugo_main.sh

> Author: https://lruihao.cn