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

export function constrain(value, min, max) {

  return Math.min(max, Math.max(value, min));

  // if (value <= low) value = low;
  // if (value >= high) value = high;     
  // return value;

}