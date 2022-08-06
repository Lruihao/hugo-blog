---
title: "Mac 配置 ADB"
date: 2022-07-05T15:39:34+08:00
categories:
- Memo
tags:
- Android
- ADB
---

作为非安卓专业开发，无需下载 Android SDK，  
仅下载 Android SDK 中的 [platform-tools](https://developer.android.com/studio/releases/platform-tools?hl=zh-cn) 命令行工具即可，并配置好环境变量

<!--more-->

```bash
open .bash_profile
```

写入以下内容

```
# platform-tools of Android SDK
export PATH=$PATH:$HOME/Applications/platform-tools
```

```bash
source .bash_profile
```

通过 USB 连接手机和电脑，执行以下命令

```bash
# 1. 打开手机 tcpip 5555 端口
adb tcpip 5555
# 2. 查看手机网络 IP
adb shell ifconfig
# 3. 在电脑上 ping 手机网络 IP
# 4. adb connect [Android IP]
```

- [adb 常用命令](https://blog.csdn.net/m0_55039968/article/details/124274084) 