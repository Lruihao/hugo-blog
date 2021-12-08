---
title: WeX5 在 win8 或者 win10 操作系统 studio 中新建。w 向导或其他的编辑窗口显示不全问题
date: 2019-04-13 11:15:20
tags: ["Wex5","Frontend"]
categories: ["others"]
---

> win10 或者 win8 系统在使用起步科技 WeX5 这款 IDE 工具，在新建 w 文件或者新建本地应用等时候，会出现不能显示完全的问题，下面是解决办法：  
1. 确认是否把操作系统的字体调整为非 100%了
2. 把`studio\dropins\studio-app2\plugins\plugin\lib\cef1\chromium.jar`这个 jar 包复制到`studio\dropins\studio-app2\plugins\plugin\lib`下，重启 studio
