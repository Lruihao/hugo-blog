---
title: 个人博客从 Hexo 迁移至 Hugo
date: 2021-10-03T15:27:58+08:00
tags:
  - hugo
  - hexo
categories:
  - hugo
---

> 电脑升级 win 11 后，分盘操作存在 bug, 然后又不小心把装代码的盘格式化了，虽然都有备份到 github, 但是当时为了省事，hexo Node 安装的很多以来插件都没有备份，现在又现在不到了，所以 hexo 博客没办法完整复原，另外，早就觉得基于 Node 的 hexo 实在有些臃肿，且博客内容多了以后部署太慢，就干脆乘机换了好了，经过一段时间寻找，最终选择了基于 Go 的 hugo, 记录一下迁移过程及待办事项。

<!--more-->
## Hugo 准备

### 概念
> Hugo is a fast and modern static site generator written in Go, and designed to make website creation fun again.

那 hugo 基于编译语言 GO 构建，对于静态页面的构建肯定是碾压 hexo 的存在，其官方标语也是很直白 `"The world’s fastest framework for building websites"`, 作为先后使用过 hexo 和 hugo 的我来说，这确实名副其实。

- [gohugo](https://gohugo.io)

### 安装
hugo 提供了很多种安装方式，Git, Docker, Binary.  
个人电脑使用二进制安装是最方便快捷的，无需安装其他依赖。  
到 [Hugo Releases](https://github.com/gohugoio/hugo/releases) 下载对应的 windows 操作系统版本的 Hugo 二进制文件，玩就要玩全的，所以我就选择了扩展版本，此次选择的最新版为 `hugo_extended_0.88.1_Windows-64bit.zip`, 然后自行解压安装即可。

### 生成站点
使用 Hugo 快速生成站点，比如希望生成到 `/path/to/site` 路径：
```bash
hugo new site /path/to/site
```
站点目录结构：  

    ▸ archetypes/    # 配置文章模板，相当于 hexo 的 scaffolds
    ▸ content/       # 文章页面内容，相当于 hexo 的 source
    ▸ data/          # 可存放一些 yaml, json, toml 格式的数据
    ▸ layouts/       # 页面布局源码，改造主题可不动主题源码
    ▸ static/        # 静态文件存放
      config.toml    # 站点配置文件，相当于 hexo 的 _config.yml

### 创建文章
注： 路径要写以 `content/` 为根目录的相对路径   
```bash
hugo new path/fileName
```
### 添加主题
添加主题的方式选用 Git 子模组的形式，为了日后快速升级，避免在使用 hexo 中因大量魔改 next 主题而导致难以升级的困扰。  
精挑细选最终选择了 [LoveIt](https://github.com/dillonzq/LoveIt)
```bash
git init
git submodule add https://github.com/dillonzq/LoveIt.git themes/LoveIt
```
在 `config.toml` 添加 `theme = "LoveIt"`

### 在本地启动网站
使用以下命令启动网站: 
```bash
hugo serve --disableFastRender
```
去查看 `http://localhost:1313`

### hugo build
使用以下命令生成静态文件，然后自己可手动选择部署到 github pages 或 COS 等服务器
```
hugo --minify
```

## Hugo&LoveIt 使用
- [LoveIt 主题文档 - 基本概念](https://hugoloveit.com/zh-cn/theme-documentation-basics)

写作指南

- [LoveIt 主题文档 - 内容](https://hugoloveit.com/zh-cn/theme-documentation-content/)
- [LoveIt 主题文档 - 内置 Shortcodes](https://hugoloveit.com/zh-cn/theme-documentation-built-in-shortcodes/)
- [LoveIt 主题文档 - 扩展 Shortcodes](https://hugoloveit.com/zh-cn/theme-documentation-extended-shortcodes/)

## Todo list
{{< cardlink href="https://github.com/Lruihao/hugo-blog" content="hugo-blog" >}}

> 原来 hexo 做了大量的美化和扩展功能，迁移到 hugo 想尽可能多的保留。取之精华，去其糟粕。

### Base
- [X] 迁移 hexo 所有文章内容
- <details>
  <summary><i class="far fa-check-square fa-fw"></i>迁移 hexo 所有页面内容</summary>

  - [x] 留言页面
  - [x] 网友打赏支持页面，整合到留言页面
  - [x] 重写关于页面，一切从简
  - [x] 友情链接页面
  - [ ] ~~重写 404 页面~~
  - [x] 站点时间和不蒜子计数改到 hello-world 页面

</details>

- [ ] [cos-album](https://img.lruihao.cn) 和 [🍚饭醉团伙🍷](https://sz.journey.lruihao.cn) 整合到博客 `cos-album/` [#7](https://github.com/Lruihao/hugo-blog/issues/7)
- [ ] ~~新增 demo/, 以子模组的形式存放前端 demo, serverless 记账本等~~ (保持原本博客的纯粹性)
- [x] 博客 valine 评论，阅读数迁移，可用 leancloud API 写代码转化(但似乎没必要)
- [x] 博客 SEO 优化迁移
- [X] `Github actions` 自动部署到 **Github pages** 和 **COS** 脚本编写
- [x] hugo 本地管理 shell 脚本工具编写
- [X] 知乎卡片式链接 改成 hugo shortcodes, 取名 `cardlink`
- <details>
  <summary><i class="far fa-square fa-fw"></i>zxm/沐目体 归档 :( <a href="https://github.com/Lruihao/hugo-blog/issues/6" target="_blank" rel="noopener noreffer">#6</a></summary>

  - [ ] 安装 沐目体
  - [ ] 压缩 沐目体 fontspider
  - [ ] 沐目体 post 修订
  - [ ] typyit 配合 随机诗词和网易云热评 API
  - [ ] 实时预览功能 base on Vuejs
  - [ ] [恋爱叙事体] `love` 归档
  - [ ] [光] 归档

</details>

- [ ] hugo 内容加密研究 [#3](https://github.com/Lruihao/hugo-blog/issues/3)
- [ ] `Lruihao/hugo-blog/README.md` 撰写, MIT, 发布 1.0.0 版本做完整备份，base on theme version
- [x] 更换 gravatar 头像 [#4](https://github.com/Lruihao/hugo-blog/issues/4)
- [ ] 博客在线编辑器研究 github1s 等 [#5](https://github.com/Lruihao/hugo-blog/issues/5)

### Theme LoveIt
> hugo LoveIt 主题整体优化，~~必要时建 PR 或 issue 到 LoveIt 仓库~~ (LoveIt 已停更一年多)  
> 先把自己发现和 LoveIt 原 repo 的 issue 尽可能的修复，修改的原则是：**不改动原项目代码**，  
> 唯一途径就是在站点相同的目录用**新增**的方式替代**修改、删除**操作。  
> 之后再等等看作者是否还会更新，如已做大量的更改，再做考虑整合为一个新的主题。

进度更新至 [#8](https://github.com/Lruihao/hugo-blog/issues/8)

- [ ] CSS 优化，背景，元素圆角化，外圆内方，居中对其等
- [ ] 沐目体引入
- [ ] TOC 序号生成
- [ ] Fix: 无标题时也会生成目录的 BUG
- [ ] subtitle 等细节优化
- [ ] Fix: typeit 打印代码时跑版的问题
- [ ] Fix: 文章 `h1` 标题多行跑版
- [ ] Code Review