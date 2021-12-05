window.onload = () => {
  CustomJS.init();
};

/**
 * @author LRUIHAO.CN
 * @description custom javascript for hugo-blog
 */
const CustomJS = new function () {
  /**
   * Initialize page action
   */
  this.init = () => {
    // whitePangu
    pangu.spacingPage();
    return this;
  }
}