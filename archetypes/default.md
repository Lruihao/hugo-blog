---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
tags:
  - draft
categories:
  - draft
draft: true

# Possible configurations
subtitle: ""
description: ""
comment: false
weight: 0

# Infrequent configurations
summary: "" # custom summary insteed of <!--more-->
featuredImage: "" # e.g. "/posts/git/images/relation-1.png"
featuredImagePreview: ""
hiddenFromHomePage: true
hiddenFromSearch: true

author: ""
authorLink: ""
license: null # repost no license
---

{{< admonition quote "quote" false >}}
note abstract info tip success question warning failure danger bug example quote 
{{< /admonition >}}

<!--more-->
