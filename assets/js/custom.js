/**
 * Custom JavaScript for Lruihao blog.
 * @author @Lruihao https://lruihao.cn
 */
class Blog {
  constructor() {
    /**
     * current environment is local or not
     * @type {Boolean}
     */
    this.isLocal = window.location.href.startsWith('http://localhost') || window.location.href.startsWith('http://127.0.0.1');
  }

  /**
   * baidu auto push
   * @link https://ziyuan.baidu.com
   * @returns {Blog}
   */
  baiduPush() {
    let bp = document.createElement('script');
    let curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bp, s);
    return this;
  }

  /**
   * console blog information
   * @returns {Blog}
   */
  blogInfo() {
    console.log(
      '%c 菠菜眾長 | lruihao.cn %c mail: 1024@lruihao.cn %c\n\n您好！\n欢迎光顾我的博客，\n请多多指教。\n',
      'color: #FF0000; background: #4bffba; padding:5px 0; border-radius: 5px 5px 5px 5px;',
      'background: #fadfa3; padding:5px 0; border-radius: 5px 5px 5px 5px;',
      ''
    );
    return this;
  }

  /**
   * Rest in Peace. R.I.P 🕯️
   * @returns {Boolean} 是否有 R.I.P 事件
   */
  RIP() {
    /**
     * 昔人已乘白云去，兹地空余黄鹤楼。逝者安息 🕯️
     * @type {Array<Object>} R.I.P events
     */
    const RIP_EVENTS = [
      {
        date: '*-9-18',
        content: '九一八事变，又称奉天事变、柳条湖事件，是日本侵略者侵华的开始。1927-1933 年资本主义世界经济大危机使日本深受打击，为缓和国内矛盾，转移人民视线，日本发动侵华战争。1931 年 9 月 18 日夜，盘踞在中国东北的日本关东军按照精心策划的阴谋，由铁道“守备队”炸毁沈阳柳条湖附近日本修筑的南满铁路路轨，并嫁祸于中国军队，日军以此为借口，炮轰中国东北军北大营，制造了震惊中外的“九一八事变”。次日，日军侵占沈阳，又陆续侵占了东北三省。1932 年 2 月，东北全境沦陷。此后，日本在中国东北建立了伪满洲国傀儡政权，开始了对东北人民长达 14 年之久的奴役和殖民统治，使东北 3000 多万同胞饱受亡国奴的痛苦滋味。九一八事变是由日本蓄意制造并发动的侵华战争，是日本帝国主义侵华的开端。九一八事变也标志着世界反法西斯战争的起点，揭开了第二次世界大战东方战场的序幕。东北人民和未撤走的东北军部队，组织起抗日义勇军，抵抗日军的侵略。中国共产党派杨靖宇等人在东北组织游击队，开展抗日游击战争。中国人民的局部抗战开始了。',
        duration: 3,
      },
      {
        date: '2022-3-28',
        content: '[3.21-mu5735] 沉痛哀悼 132 名遇难同胞：东航航班失事，遇难者含旅客 123 人，机组 9 人',
        duration: 3,
      },
      {
        date: '2022-12-03',
        content: '江泽民同志逝世，享年 96 岁',
        duration: 3,
      },
    ];
    const now = new Date();
    const today = { 
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      date: now.getDate(),
    };
    const todayEvents = RIP_EVENTS.filter(event => {
      const [ eventYear, eventMonth, eventDate] = event.date.split('-');
      // 计算出 event 的结束日期
      const eventEndDate = new Date(
        eventYear === '*' ? today.year : eventYear,
        (eventMonth === '*' ? today.month : eventMonth) - 1,
        eventDate === '*' ? today.date : eventDate
      );
      eventEndDate.setDate(eventEndDate.getDate() + event.duration);
      return (
        (eventYear === '*' || parseInt(eventYear) === today.year) &&
        (eventMonth === '*' || parseInt(eventMonth) === today.month) &&
        (eventDate === '*' || parseInt(eventDate) === today.date || (today.date >= parseInt(eventDate) && now <= eventEndDate))
      )
    });

    if (todayEvents.length) {
      document.querySelector('html').style.filter = 'grayscale(100%)';
      console.table(todayEvents);
    }
    return todayEvents.length;
  }

  /**
   * initialize
   * @returns {Blog}
   */
  init() {
    if (!this.isLocal) {
      this.baiduPush();
    }
    // custom settings
    if (!this.RIP()) {
      this.blogInfo();
    }
    return this;
  }
  
}

/**
 * immediate.
 */
(() => {
  const blog = new Blog();
  blog.init();
  // it will be executed when the DOM tree is built
  document.addEventListener('DOMContentLoaded', () => {
    //
  });
})();
