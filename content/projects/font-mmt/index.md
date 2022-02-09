---
title: 沐目体
subtitle: 一款手写给她的字体
date: 2018-10-12 19:39:19
tags:
- 沐目体
categories:
- others
type: "posts"
library:
  css:
    mmtCSS: mmt.css
  js:
    vueJS: https://cdn.jsdelivr.net/npm/vue@2
---

<iframe class="manuscript" src="https://hw.xiezixiansheng.com/mobile.php?c=Grzkreader&a=fontshowPics&u=qbfRl8gPF2s-&z=Kqz%2FRroVGYc-" frameborder="0" allowfullscreen></iframe>

---

{{< admonition success "沐目之，湘也" >}}
写给她的字，从恋爱开始到结束。  
写了两遍，第一遍一年半，第二遍约两年，没写完，也不打算写了。
{{< /admonition >}}

<!--more-->

## 效果

### 歌词

<div class="preview-lyric">

|《富士山下》|《爱情转移》|
|:-:|:-:|
|前尘硬化像石头|阳光在身上流转|
|随缘地抛下便逃走|等所有业障被原谅|
|我绝不罕有|爱情不停站|
|往街里绕过一周|想开往地老天荒|
|我便化乌有|需要多勇敢|
|你还嫌不够|你不要失望|
|我把这陈年风褛|荡气回肠是为了|
|送赠你解咒|最美的平凡|

</div>

### 网易云评论

<div class="comment-163">
  <span class="pic-backdrop"></span>
  <div class="commentator">
    <img class="comment-avatar" style="display:none;"/>
    <span class="comment-nickname"></span>
  </div>
  <div class="comment-content"></div>
  <a class="music" rel="external nofollow noopener noreferrer" target="_blank">
    <span class="artists-name"></span>
    <span class="music-name"></span>
  </a>
</div>

### 实时预览

<div id="app-mmt" v-cloak>
  <textarea class="live-textarea" v-model="message" placeholder="请输入文字 ..."></textarea>
  <p class="live-content">{{ message }}</p>
</div>
<br/>

## 下载
{{< link href="https://github.com/Lruihao/MMT/releases" content="沐目体下载" card=true >}}

{{< admonition warning "警告" >}}
*仅用于个人非商用！*
{{< /admonition >}}

<details>
  <summary>点击展开应用图片</summary>

![word](images/word1.png)

<div class="preview-images">

![album](images/cell.jpg)
![wechat](images/wechat.png)
![mobile setting](images/setting.png)

</div>

</details>

{{< script >}}
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.uomg.com/api/comments.163')
  .then(response => response.json())
  .then((comment) => {
    document.querySelector('.pic-backdrop').style.backgroundImage = `url(${comment.data.picurl})`;
    document.querySelector('.comment-avatar').alt = `${comment.data.nickname}'s avatar`;
    document.querySelector('.comment-avatar').src = comment.data.avatarurl;
    document.querySelector('.comment-avatar').style = '';
    document.querySelector('.comment-nickname').innerHTML = comment.data.nickname;
    document.querySelector('.comment-content').innerHTML = comment.data.content.replace('\n','<br/>');
    document.querySelector('.music').href = comment.data.url;
    document.querySelector('.music-name').innerHTML = comment.data.name;
    document.querySelector('.artists-name').innerHTML = comment.data.artistsname;
    new Vue({
      el: '#app-mmt',
      data: {
        message: ''
      }
    })
  })
});
{{< /script >}}
