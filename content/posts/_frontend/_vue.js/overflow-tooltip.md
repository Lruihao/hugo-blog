---
title: 实现类似于 Element UI 表格的溢出文本提示功能
date: 2024-02-29T16:46:00+08:00
categories:
  - Vue.js
  - JavaScript
tags:
  - Vue2
---

在 Element UI 的表格组件中，当表格列的内容过长时，设置 `show-overflow-tooltip` 会自动显示一个 tooltip 来展示完整的内容。这个功能在实际项目中也是非常常见的，那么我们该如何实现这个功能呢？

<!--more-->

## Demo

先来看一下效果：[demo](http://lruihao.github.io/vue-el-demo/#/overflow-tooltip)

## 实现代码

直接贴上完整的代码，通过一个自定义指定 `v-overflow-tooltip` 来实现：

```js
const plugin = {
  install(Vue) {
    Vue.directive('overflow-tooltip', {
      inserted: (el, binding, vnode) => {
        // 设置内容
        if (el.innerText === '') {
          el.innerText = binding.value
        }
        // 设置元素样式
        Object.assign(el.style, {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        })

        const elComputed = document.defaultView.getComputedStyle(el, '')
        const padding = parseInt(elComputed.paddingLeft.replace('px', '')) + parseInt(elComputed.paddingRight.replace('px', ''))
        const range = document.createRange()
        range.setStart(el, 0)
        range.setEnd(el, el.childNodes.length)
        const rangeWidth = range.getBoundingClientRect().width

        if (rangeWidth + padding > el.offsetWidth || el.scrollWidth > el.offsetWidth) {
          // 鼠标移入时，将浮沉元素插入到 body 中
          el.onmouseenter = function (e) {
            // 创建浮层元素并设置样式
            const vcTooltipDom = document.createElement('div')
            Object.assign(vcTooltipDom.style, {
              position: 'absolute',
              background: '#303133',
              color: '#fff',
              fontSize: '12px',
              zIndex: '2000',
              padding: '10px',
              borderRadius: '4px',
              lineHeight: 1.2,
              minHeight: '10px',
              wordWrap: 'break-word',
            })
            // 设置 id 方便寻找
            vcTooltipDom.setAttribute('id', 'vc-tooltip')
            // 将浮层插入到 body 中
            document.body.appendChild(vcTooltipDom)
            // 浮层中的文字 通过属性值传递动态的显示文案
            document.getElementById('vc-tooltip').innerHTML = binding.value
          }
          // 鼠标移动时，动态修改浮沉的位置属性
          el.onmousemove = function (e) {
            const vcTooltipDom = document.getElementById('vc-tooltip')
            vcTooltipDom.style.top = e.clientY + 15 + 'px'
            vcTooltipDom.style.left = e.clientX + 15 + 'px'
          }
          // 鼠标移出时将浮层元素销毁
          el.onmouseleave = function () {
            // 找到浮层元素并移出
            const vcTooltipDom = document.getElementById('vc-tooltip')
            vcTooltipDom && document.body.removeChild(vcTooltipDom)
          }
        }
      }
    })
  }
}


let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin
```

使用很简单，导入并注册之后，就可以在需要的地方使用 `v-overflow-tooltip` 指令了：

```js
import overflowTooltip from '@/directives/overflow-tooltip'
Vue.use(overflowTooltip)
```

比如说：

```html
<span v-overflow-tooltip="content" style="display: inline-block; width: 100px;" />
```

## 实现原理

1. 通过 `getComputedStyle` 获取元素的 `padding` 值，然后通过 `createRange` 获取元素的宽度。
2. 如果元素的内容宽度大于元素的宽度，那么就显示 tooltip。
3. 鼠标移入时，将浮沉元素插入到 `body` 中，鼠标移动时，动态修改浮沉的位置属性，鼠标移出时将浮层元素销毁。

其中最关键的一段代码是：

```js
const range = document.createRange()
range.setStart(el, 0)
range.setEnd(el, el.childNodes.length)
const rangeWidth = range.getBoundingClientRect().width
```

这段代码是通过 `createRange` 设置元素的范围，然后通过 `getBoundingClientRect` 获取元素的宽度。
