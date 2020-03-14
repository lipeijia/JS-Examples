// 非同步載入並執行來自指定 URL 的指令碼
function loadAsync(url) {
  const head = document.getElementsByTagName('head')[0];
  const s = document.createElement('script');
  s.src = url;
  head.appendChild(s);
}

// onLoad(): 在文件載入完畢後調用一個函式
function onLoad(func) {
  if (onLoad.loaded) {                            //如果文件已載入完成
    window.setTimeout(func, 0);                   //將 func 排入序列，盡快執行它
  } else if (window.addEventListener) {
    window.addEventListener("load", func, false);
  } else if (window.attachEvent)  {               //IE8 或之前版本的 IE 要用這個
    window.attachEvent("load", func);
  }
} 