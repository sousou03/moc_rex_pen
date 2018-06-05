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
