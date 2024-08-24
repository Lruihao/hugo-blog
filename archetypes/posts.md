---
title: {{ replace .TranslationBaseName "-" " " | title }}
subtitle:
date: {{ .Date }}
slug: {{ substr .File.UniqueID 0 7 }}
draft: true
author:
  name:
  link:
  email:
  avatar:
description:
keywords:
license:
comment: false
weight: 0
categories:
  - draft
tags:
  - draft
hiddenFromHomePage: false
hiddenFromSearch: false
hiddenFromFeed: false
hiddenFromRelated: false
summary:
resources:
  - name: featured-image
    src: featured-image.jpg
  - name: featured-image-preview
    src: featured-image-preview.jpg
toc: true
math: false
lightgallery: false
---

{{< admonition quote "quote" false >}}
note abstract info tip success question warning failure danger bug example quote
{{< /admonition >}}

<!--more-->
