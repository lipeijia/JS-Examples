/*
 * 從 URL 的查詢字串解析出由 ＆ 所區隔的 name=value
 * 引數對組。 它把這些 name=value 對組儲存成物件。
 * 
 * 用法：
 * const args = urlArgs();  //從URL解析出引數
 * const q = args.q || "";  //若有定義就用引數，不然預設
 * const n = args.n ? parseInt(args.n) : 10; 
*/

function urlArgs() {
  const args = {}; //創建空物件
  const query = location.search.substring(1);  //取得查詢字串，扣除‘?'
  const pairs = query.split('&');  //從 & 切開
  for(let i = 0; i < pairs.length; i++) {  
    const pos = pairs[i].indexOf('=');     //找出“name=value"
    if (pos == -1) continue;               //找不到就跳過
    let name = pairs[i].substring(0, pos); //取出 name
    let value = pairs[i].substring(pos+1); //取出 value
    value = decodeURIComponent(value);     //解碼
    args[name] = value;                    //存為物件
  }
  return arguments;

}