/**
 * @author LRUIHAO.CN
 * @description custom javascript for hugo-blog
 */
const CustomJS = new (function () {
  /**
   * Fix toc bug
   * See https://github.com/Lruihao/hugo-blog/issues/24
   * @returns CustomJS
   */
  this.fixToc = () => {
    $toc = document.querySelector("#toc-auto");
    if (!$toc) {
      return this;
    }
    if (document.querySelector("#TableOfContents").innerText === "") {
      $toc.style.display = "none";
    }
    return this;
  };

  /**
   * Initialize page action
   * @returns CustomJS
   */
  this.init = () => {
    // Pangu white
    pangu.spacingPage();
    return this;
  };
})();

(() => {
  CustomJS.fixToc();
})();

window.onload = () => {
  CustomJS.init();
};
