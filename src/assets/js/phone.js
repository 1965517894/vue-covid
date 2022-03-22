(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientatingchange" in window ? "orientatingchange" : "resize",
    recalc = function () {
      // js获取当前设备大小: document.documentElement.clientWidth
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 750) {
        // 宽度>750 平板或者桌面
        docEl.style.fontSize = "100px";
      } else {
        // 移动端的适配
        docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
  console.log("phone.js loaded");
})(document, window);
