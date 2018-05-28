/**
 * Generate a random float
 *
 * @param  {number} minValue  Minimum boundary
 * @param  {number} maxValue  Maximum boundary
 * @param  {number} precision Precision
 * @return {number}           Generated float
 */
export function random( minValue, maxValue, precision = 2 ) {

  return parseFloat( Math.min( minValue + ( Math.random() * ( maxValue - minValue ) ), maxValue ).toFixed( precision ) );

}

// ランダムな整数を取得
// -----------------------------------
// @min : 最小値(int)
// @max : 最大値(int)
// return : minからmaxまでのランダムな整数(int)
// -----------------------------------
export function randomInt(min, max) {

  return Math.floor((Math.random() * ((max + 1) - min) + min));

}

export function dist(p1, p2) {

  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

}

export function atan2(c, p) {

  // Math.atan2(y, x) 
  var rad = Math.atan2(p.y - c.y, p.x - c.x);

  return rad;

}

export function degree(radians) {

  return radians * 180 / Math.PI; //1ラジアンが何度か

}