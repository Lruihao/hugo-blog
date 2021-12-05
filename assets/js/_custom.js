/**
 * @author LRUIHAO.CN
 * @description Custom javascript for hugo-blog
 */
const CustomJS = new (function () {
  /**
   * Pangu white.
   * Listen to any DOM change and automatically perform spacing via MutationObserver()
   * @link https://github.com/vinta/pangu.js
   * @returns CustomJS
   */
  this.panguListener = () => {
    document.addEventListener("DOMContentLoaded", () => {
      pangu.autoSpacingPage();
    });
    return this;
  };
  /**
   * Baidu auto push.
   * @link https://ziyuan.baidu.com
   * @returns CustomJS
   */
  this.baiduPush = () => {
    var bp = document.createElement("script");
    var curProtocol = window.location.protocol.split(":")[0];
    if (curProtocol === "https") {
      bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
    } else {
      bp.src = "http://push.zhanzhang.baidu.com/push.js";
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
    return this;
  };
  /**
   * Baidu statistics.
   * @link https://tongji.baidu.com
   * @returns CustomJS
   */
  this.baiduStatistics = () => {
    var _hmt = _hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d25f1e053205bf07562f33365fef04d7";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
    return this;
  };
  /**
   * Console some infomation
   * @returns CustomJS
   */
  this.consoleInfo = () => {
    console.log(
      "\n`              @@#``@@@@@@@@@@@@@@@@@@##,`   \n`              @@#`;@@@@@@@@@@@@@@@@@@@':'   \n`              @@#`@@@@@@@@@@@@@@@@@@@#+#;`  \n`              @@#`@@@@@@@@@@@@@@@@@@###@'.  \n`              @@+.@@@@@@@@@@@@@@@@@@@@@##,  \n`              @@#,@@@@@@@@@@@@@@@@@@@@@@#,  \n`              #@#:@@@@@@@@@@@@@@@@@@@@@@@,  \n`              #@#'@@@@@@@@@@@@@@@@@@@@@@@.  \n`              +@#;@@@@@@@@@@@@@@@@@@@@@@#   \n`          `;: ;@#'@@@@@@@@@@@@@@@@@@+'+@'   \n`    `,,;';'+';'@@+:@@@@@@@@@@@@##@#',.:#;   \n,, ``    ``..,:;@@#'@@@@@@@@#####@@@@#:`:.   \n`       `````:++@@@@@@@@@@@@@###@@@@#+,..    \n        ``````.#@@@@@@@@@@@@@@#@@@#++#'``    \n`    ```.,,:,.`:@@@@@@@@@@@@@###@@@##'.`     \n``..`````..,::;+@@@@@@@@@@@@#+`::+##'`.      \n`      ````.```,@@@@@@@@@@@##;``.,';` `      \n``.;@@@@@@@@@@@@@@@@@@@@@@###;``..``````     \n#@@@@@@@@@@@@@@@@@@@@@@@@##@#;``,``,.``      \n@@@@@@@@@@@@@@@@@@@.`````..``.. +` `:`       \n@+''++#####@@#`.@@@``````` ` `,```  ``       \n';;;;'+##+'+.`;+@@@,..```` `` :,.            \n;::,,:;+#++``,,#@@@'..``````` ,`.``          \n;,,,,...'#.,,..#@@@#,,.`````` .````          \n:,,,,....`,::;''+#@#;,..`````````.``         \n:,,,.....'##++''';:+':,.`..,,...`            \n:,,,...#####+'+#@@@'.';+:.  ` ``             \n;,,.`'####'#,`.`+@@@+'``` `.`                \n;,.`#@@@#+:'+++##+@##@,,,,`                  \n',.#@@###'''';:,.```,+#.                     \n+,#@@@####;,,..```````````````         `.:,::\n+@@@@###+;,,..``````````````````          `.,\n#@@@##+',,,........``````````````            \n@@@@#+:,,,,`........``````````               \n@@@#+:,,,,.`````.....``````````           `` \n@@##':,......`````....```  `````          ```\n@@@#':,....,..``````..````    ```         ```\n@@@#',....,,,..```````````     ```         ..\n@@@#,.....,,,,.``  ````````   ``````         \n@@@+....,,,,,..`````````````   ``````````    \n@@@:....,,,,.LiRuihao````````  ```````````` \n#@@,....,,,,.Always Be Yourself !````````````\n,##,,...,::,.````````````..``````   `......``\n,'#,,..,,:::.`````````........``````   `.,,..\n"
    );
    console.log(
      "%c 菠菜眾長 | lruihao.cn %c mail: 1024@lruihao.cn %c\n\n您好！\n欢迎光顾我的博客，\n请多多指教。\n",
      "color: #FF0000; background: #4bffba; padding:5px 0; border-radius: 5px 5px 5px 5px;",
      "background: #fadfa3; padding:5px 0; border-radius: 5px 5px 5px 5px;",
      ""
    );
    return this;
  };
  /**
   * Fix the toc bug.
   * @link https://github.com/Lruihao/hugo-blog/issues/24
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
   * Initialize.
   * @returns CustomJS
   */
  this.init = () => {
    this.consoleInfo();
    return this;
  };
})();

/**
 * Immediate.
 */
(() => {
  CustomJS.panguListener()
  CustomJS.baiduStatistics().baiduPush();
  CustomJS.fixToc();
})();

/**
 * Waiting for the page to load.
 */
window.onload = () => {
  CustomJS.init();
};
