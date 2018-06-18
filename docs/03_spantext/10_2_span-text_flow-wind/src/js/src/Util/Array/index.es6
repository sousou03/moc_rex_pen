// 配列をランダムに並べ替え
// -----------------------------------
// @arr : 配列(Array)
// -----------------------------------
export function shuffle(ary) {

  var arr = [];
  arr = ary.slice();
  var i = arr.length;
  while(i){
    var j = Math.floor(Math.random()*i);
    var t = arr[--i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;

}

// ランダムな数値を作る
export function randomArr (len) {

  var arr = [];

  for (var i = 0; i < len; i++) arr.push(i);

  arr = this.shuffle(arr);

  return arr;

}


// 配列内のパラメータを比較してソート
// -----------------------------------
// @arr : 配列(Array)
// @para : パラメーター名
// @desc : 降順かどうか(boolean) デフォルトは昇順
// -----------------------------------
export function sort(arr, para, desc) {
  if (desc === void 0) {
    desc = false;
  }
  if (desc) {
    return arr.sort(function(a, b) {
      return b[para] - a[para];
    });
  } else {
    return arr.sort(function(a, b) {
      return a[para] - b[para];
    });
  }
}