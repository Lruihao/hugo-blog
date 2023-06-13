---
title: ttf 字体压缩
date: 2018-10-17 21:38:06
tags:
  - Node.js
  - 字体压缩
categories:
  - Grocery
description: html 网页引用中文字体，文件过大，加载缓慢的解决办法
---

### 安装 nodeJs

这个不多说，都有。

### 安装字蛛

输入命令

```
npm install font-spider -g
```

### 运行

安装成功之后就开始压缩了
![文件结构](images/menu.png)

我的 css

```css
<style type="text/css">
  @font-face {
    font-family: MMT;
    src: url("font/MMT_579767_SOAJ0_0.ttf");
  }
</style>
```

生成新的字体库，命令行输入

```
font-spider C:\Users\李瑞豪、Desktop\love\index.html
```

![执行结果](images/jieguo.png)

[官网](http://font-spider.org)
