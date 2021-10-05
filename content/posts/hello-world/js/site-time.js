function createTime() {
  var now = new Date();
  var run = new Date("2018-05-28T20:01:01+08:00");
  //總的秒數
  var runTime = (now - run) / 1000,
    days = Math.floor(runTime / 60 / 60 / 24),
    hours = Math.floor(runTime / 60 / 60 - (24 * days)),
    minutes = Math.floor(runTime / 60 - (24 * 60 * days) - (60 * hours)),
    seconds = Math.floor((now - run) / 1000 - (24 * 60 * 60 * days) - (60 * 60 * hours) - (60 * minutes));
  //前置零
  if (String(hours).length === 1) {
    hours = "0" + hours;
  }
  if (String(minutes).length === 1) {
    minutes = "0" + minutes;
  }
  if (String(seconds).length === 1) {
    seconds = "0" + seconds;
  }
  document.querySelector(".run-times").innerHTML = `Running: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

//setInterval("createTime()", 500);
if (!document.hidden) {
  var siteTime = setInterval("createTime()", 500);
} else {
  clearInterval(siteTime);
}