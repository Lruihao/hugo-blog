---
title: CRON 表达式的基本语法
date: 2020-03-25 09:19:44
tags: ["linux","shell","Cron"]
categories: ["Fullstack"]
---

> `<秒> <分钟> <小时> <日期 day-of-month> <月份> <星期 day-of-week>`

<!--more-->
# 基本语法
<table><thead><tr><th>位置</th><th>字段</th><th>约束</th><th>取值</th><th>可使用的特殊符号</th></tr></thead><tbody><tr><td>1</td><td>秒</td><td>必须</td><td>0-59</td><td><code>, - \* /</code></td></tr><tr><td>2</td><td>分钟</td><td>必须</td><td>0-59</td><td><code>, - \* /</code></td></tr><tr><td>3</td><td>小时</td><td>必须</td><td>0-23（0 为午夜）</td><td><code>, - \* /</code></td></tr><tr><td>4</td><td>日期</td><td>必须</td><td>1-31</td><td><code>, - \* ? /</code></td></tr><tr><td>5</td><td>月份</td><td>必须</td><td>1-12、JAN-DEC</td><td><code>, - \* /</code></td></tr><tr><td>6</td><td>星期</td><td>必须</td><td>1-7、SUN-SAT</td><td><code>, - ? /</code></td></tr></tbody></table>

# 特殊符号的用法
<table><thead><tr><th>符号</th><th>含义</th><th>用法</th></tr></thead><tbody><tr><td><code>\*</code></td><td>所有值</td><td>代表一个字段的所有可能取值。如将<code>&lt;分钟&gt;</code> 设为<strong>\*</strong>，表示每一分钟。</td></tr><tr><td><code>?</code></td><td>不指定值</td><td>用于可以使用该符号的两个字段中的一个，在一个表达式中只能出现一次。如任务执行时间为每月 10 号，星期几无所谓，那么表达式中<code>&lt;日期&gt;</code> 设为<strong>10</strong>，<code>&lt;星期&gt;</code> 设为<strong>?</strong>。</td></tr><tr><td><code>-</code></td><td>范围</td><td>如<code>&lt;小时&gt;</code> 为<strong>10-12</strong>，即10 点、11 点、12 点。</td></tr><tr><td><code>,</code></td><td><span class="text-nowrap">分隔多个值</span></td><td>如<code>&lt;星期&gt;</code> 为<strong>MON,WED,FRI</strong>，即周一、周三、周五。</td></tr><tr><td><code>/</code></td><td>增量</td><td>如<code>&lt;秒&gt;</code> 设为<strong>0/15</strong>，即从 0 秒开始，以 15 秒为增量，包括 0、15、30、45 秒；<strong>5/15</strong> 即 5、20、35、50 秒。<strong>\*/</strong> 与<strong>0/</strong> 等效，如<code>&lt;日期&gt;</code> 设为<strong>1/3</strong>，即从每个月的第一天开始，每 3 天（即每隔 2 天）执行一次任务。</td></tr></tbody></table>各字段以空格或空白隔开。JAN-DEC、SUN-SAT 这些值不区分大小写，比如 MON 和 mon 效果一样。
<h1 id="举例如下">举例如下</h1><table><thead><tr><th>表达式</th><th>说明</th></tr></thead><tbody><tr><td><code>0  0/5 \* \* \* ?</code></td><td>每隔 5 分钟执行一次</td></tr><tr><td><code>10 0/5 \* \* \* ?</code></td><td>每隔 5 分钟执行一次，每次执行都在分钟开始的 10 秒，例如 10:00:10、10:05:10 等等。</td></tr><tr><td><code style="white-space:nowrap;">0 30 10-13 ? \* WED,FRI</code></td><td>每周三和每周五的 10:30、11:30、12:30、13:30 执行。</td></tr><tr><td><code>0 0/30 8-9 5,20 \* ?</code></td><td>每个月的 5 号和 20 号的 8 点和 10 点之间每隔 30 分钟执行一次，也就是 8:00、8:30、9:00 和 9:30。</td></tr></tbody></table>