---
title: watermark base on position fixed
date: 2021-05-23 17:15:41
tags:
- watermark
- JavaScript
- Frontend
categories:
- JavaScript
---

just for backup of watermark.
<!--more-->

# Watermark Class
```js
/* global Tiger */

Tiger.Watermark = function Watermark() {

  var _wmObserver;
  var _wmParentObserver;
  var _windowsWidth = window.outerWidth;
  var _windowsHeight = window.outerHeight;

  /**
   * create Dom of watermark's container 
   * @param {Tiger.Watermark} watermark
   */
  var _createContainer = function (watermark) {
    watermark._container = document.createElement('div');
    $(watermark._container).appendTo('.tiger-main-container')
            .addClass('tiger-watermark-container')
            .addClass(watermark.options.className)
            .attr('aria-hidden', true);
  };

  /**
   * create watermark's Dom
   * @param {Tiger.Watermark} watermark
   * @param {Object} options
   */
  var _createWatermark = function (watermark, options) {
    options.rowSpaceing = options.rowSpaceing || 50;
    options.colSpaceing = options.colSpaceing || 30;
    options.width = options.width || 150;
    options.height = options.height || 20;
    let navbarHeight = $('.tiger-navbar').outerHeight() || 0;
    let rows = parseInt((_windowsHeight - navbarHeight) / (options.height + options.rowSpaceing));
    let cols = parseInt(_windowsWidth / (options.width + options.colSpaceing));
    let offsetLeft = (_windowsWidth - options.width * cols - options.colSpaceing * (cols - 1)) / 2;
    let offsetTop =  navbarHeight / 2 + (_windowsHeight - options.height * rows - options.rowSpaceing * (rows - 1)) / 2;
    for (let row = 0; row < rows; row++) {
      let top = offsetTop + (options.rowSpaceing + options.height) * row;
      for (let col = 0; col < cols; col++) {
        let left = offsetLeft + (options.colSpaceing + options.width) * col;
        $(document.createElement('div')).appendTo(watermark._container)
                .addClass('tiger-watermark')
                .css({
                  'left': `${left}px`,
                  'top': `${top}px`,
                  'width': `${options.width}px`,
                  'height': `${options.height}px`,
                  'transform': `rotate(${options.rotate}deg)`,
                  'opacity': `${options.opacity}`,
                  'font-size': `${options.fontSize}rem`
                })
                .html(options.content);
      }
    }
  };
 
 /**
  * Re render watermark
  * @param {Tiger.Watermark} watermark
  * @param {Object} options
  */
 var _render = function (watermark, options){
    _wmObserver.disconnect();
    $(watermark._container).empty();
    _createWatermark(watermark, options);
    _wmObserver.observe(watermark._container, {
      attributes: true, 
      childList: true, 
      characterData: true, 
      subtree:true 
    });
 };

  /**
   * Observe watermark and watermark's parentNode mutations
   * @param {Tiger.Watermark} watermark
   */
  var _addObserve = function(watermark){
    //observe watermark element and its child element
    _wmObserver = new MutationObserver(function(mutations, observer) {
      _render(watermark, watermark.options);
    });
    _wmObserver.observe(watermark._container, {
      attributes: true, 
      childList: true, 
      characterData: true, 
      subtree:true 
    });
    //observe parent element, recreate if the element is deleted
    _wmParentObserver = new MutationObserver(function(mutations) {
      for(m of mutations){
        if(m.type === 'childList' && m.removedNodes.length > 0
          && $('.tiger-watermark-container').length !== 1) {
          $(watermark._container).appendTo('.tiger-main-container');
        }
      }
    });
    _wmParentObserver.observe(watermark._container.parentNode, {
      childList: true,
      subtree: true
    });
  };

  /**
   * windows resize listener
   * @param {Tiger.Watermark} watermark
   */
  var _addResizeListener = function(watermark){
    $(window).on('resize', function(){
      if(window.outerHeight !== _windowsHeight || window.outerWidth !== _windowsWidth){
        _windowsHeight = window.outerHeight;
        _windowsWidth = window.outerWidth;
        _render(watermark, watermark.options);
      }
    });
  };

  /**
   * Tiger.Watermark.<br/>
   * create watermark for webpage and automatic adjust when windows resie.
   * @param {Object} options
   * @param {String} options.content watermark's text
   * @param {Number} [options.width=150] watermark's width. unit: px
   * @param {Number} [options.height=20] watermark's height. unit: px
   * @param {Number} [options.RowSpaceing=50] row spaceing of watermarks. unit: px
   * @param {Number} [options.colSpaceing=30] col spaceing of watermarks. unit: px
   * @param {Number} [options.rotate=15] watermark's tangent angle. unit: deg
   * @param {Number} [options.opacity=0.15] watermark's transparency
   * @param {Number} [options.fontSize=0.85] watermark's fontSize. unit: rem
   */
  function Watermark(options = {}) {
    var _proto = Watermark.prototype;
    this.options = options;
    _createContainer(this);
    _createWatermark(this, this.options);
    _addObserve(this);
    _addResizeListener(this);

    /**
     * upload watermark's text content
     * @param {String} content watermark's text
     */
    _proto.upload = function (content) {
      if(!content){
       return;
      }
      _wmParentObserver.disconnect();
      _wmObserver.disconnect();
      this.options.content = content;
      $(this._container).find('.tiger-watermark')
                        .html(content);
      _wmParentObserver.observe(this._container.parentNode, {
        childList: true,
        subtree: true
      });
      _wmObserver.observe(this._container, {
        attributes: true, 
        childList: true, 
        characterData: true, 
        subtree:true 
      });

    };

    /**
     * Re render watermark
     * @param {Object} options
     */
    _proto.render = function(options = {}){
      _render(this, Object.assign(this.options, options));
    }

    /**
     * Force remove watermark
     */
    _proto.remove = function () {
      _wmParentObserver.disconnect();
      $(this._container).remove();
    };
  }
  return Watermark;
}();
```
# Style
```css
/* tiger-watermark */
.tiger-watermark-container{
  display: block !important;
  pointer-events: none !important;
}
.tiger-watermark{
  position: fixed;
  user-select: none !important;
  z-index: 999999;
  word-break: break-all;
  overflow: hidden;
  text-align: center;
  transform: rotate(15deg);
  font-size: 0.8rem;
  opacity: 0.15;
}
```
# Use
```js
var wm = new Tiger.Watermark({
  'content': '系统管理员 (admin)'
});

wm.upload('李四啊_ (Lruihao)');

wm.remder({
  font-size: 0.8,
  opacity: 0.25
});

wm.remove();
```