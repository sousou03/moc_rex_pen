// ------------------------------------------------------------
//
//  Ticker
//
// ------------------------------------------------------------

export function val() {

    return Math.random();

  }

  // from: https://ics.media/entry/11292
  // 乱数の乗算 – ゼロ付近の割合を多くする
export function val01() {

    return Math.random() * Math.random();

  }

  // 乱数の2乗 – ゼロ付近の割合をさらに多くする
export function val02() {

    var r = Math.random();

    return r * r;

  }

  // 乱数の平方根。出現頻度が0.0から1.0まで直線的に増えていく
export function val03() {

    return Math.sqrt(Math.random());

  }

  // from: http://fladdict.net/exp/random/
  // 過去2フレームに、距離○○%以内の重複数が出ないようになっている。
export function val04(distance=0.33) {

    var val = Math.random();

    while(Math.abs(this.lastValue-val) < distance && Math.abs(this.lastValue2-val) < distance) {
      val = Math.random();
    }

    this.lastValue2 = this.lastValue;
    this.lastValue = val;

    return val;

  }

  // コクのある乱数
export function val05(num=6.0) {

    var r = 0;

    for (var i = 0; i < num; i++) {
      r += Math.random();
    }

    r = r / num;

    return r;

  }

  // 芳醇なまろ味を出した乱数
  // noise関数に比べて、より繊細で幅のある味
export function val06(interpolation=0.8) {

    this.lastValue_val06 = this.lastValue_val06 * interpolation + Math.random() * (1-interpolation);
    return this.lastValue_val06;

  }

  // need: perlin.js
    // out -1 〜 1
    // ex noise(gb.in.up.frame/100, 0.01);
export function noise1(t, p=0.01) {

    return noise.simplex2(p, t);

  }

  // need: ImprovedNoise.js three.jsのlibrary
    // out -0.5 〜 0.5 じゃっかん、0.5を超えるときがある
export function noise2(t, x=0.01, y=0.08) {

    return this.p.noise(t, x, y);

  }

export function sin(t) {

    return Math.sin(t);

  }

  // from: https://medium.com/@gordonnl/the-ocean-170fdfd659f1
export function sin2(t) {

    return Math.sin(t) + Math.sin(t * 2);

  }

  
export function sin3(t) {

    return (Math.sin(t) + Math.sin(2.2 * t + 5.52) + Math.sin(2.9 * t + 0.93) + Math.sin(4.6 * t + 8.94)) / 4;

  }

  // from: https://ics.media/entry/11292
  // normal distribution / 正規分布
export function normal() {
      
    // 0.0未満、1.0以上になるケースがあるため
    // その時は再計算を行う
    var v;
    while (true) {
        v = this.calcNormal();
        if (0 <= v && v < 1) {
            break;
        }
    }

    return v;

  }

export function calcNormal() {

    // 正規乱数
    var r1 = Math.random();
    var r2 = Math.random();
    var value = Math.sqrt(-2.0 * Math.log(r1)) * Math.sin(2.0 * Math.PI * r2);
    // 値を0以上1未満になるよう正規化する
    value = (value + 3) / 6;
    return value;

  }

export function sign() {
    
    return (Math.random()<0.5)? 1: -1;

  }

  // 時々、かなり飛ぶ
export function montecarlo() {

    var r1 = Math.random();
    var probability = Math.pow(1.0 - r1,8);

    var r2 = Math.random();
    if (r2 < probability) {
      return r1;
    }

    return 0;

  }

// export default class Val {

//   constructor() {

//     this.lastValue_val06 = 0;

//     this.p = new ImprovedNoise();
  
//   }

//   val() {

//     return Math.random();

//   }

//   // from: https://ics.media/entry/11292
//   // 乱数の乗算 – ゼロ付近の割合を多くする
//   val01() {

//     return Math.random() * Math.random();

//   }

//   // 乱数の2乗 – ゼロ付近の割合をさらに多くする
//   val02() {

//     var r = Math.random();

//     return r * r;

//   }

//   // 乱数の平方根。出現頻度が0.0から1.0まで直線的に増えていく
//   val03() {

//     return Math.sqrt(Math.random());

//   }

//   // from: http://fladdict.net/exp/random/
//   // 過去2フレームに、距離○○%以内の重複数が出ないようになっている。
//   val04(distance=0.33) {

//     var val = Math.random();

//     while(Math.abs(this.lastValue-val) < distance && Math.abs(this.lastValue2-val) < distance) {
//       val = Math.random();
//     }

//     this.lastValue2 = this.lastValue;
//     this.lastValue = val;

//     return val;

//   }

//   // コクのある乱数
//   val05(num=6.0) {

//     var r = 0;

//     for (var i = 0; i < num; i++) {
//       r += Math.random();
//     }

//     r = r / num;

//     return r;

//   }

//   // 芳醇なまろ味を出した乱数
//   // noise関数に比べて、より繊細で幅のある味
//   val06(interpolation=0.8) {

//     this.lastValue_val06 = this.lastValue_val06 * interpolation + Math.random() * (1-interpolation);
//     return this.lastValue_val06;

//   }

//   // need: perlin.js
//     // out -1 〜 1
//     // ex noise.simplex2(0.01, gb.in.up.frame/100);
//   noise(t, p=0.01) {

//     return noise.simplex2(p, t);

//   }

//   // need: ImprovedNoise.js three.jsのlibrary
//     // out -0.5 〜 0.5 じゃっかん、0.5を超えるときがある
//   noise2(t, x=0.01, y=0.08) {

//     return this.p.noise(t, x, y);

//   }

//   sin(t) {

//     return Math.sin(t);

//   }

//   // from: https://medium.com/@gordonnl/the-ocean-170fdfd659f1
//   sin2(t) {

//     return Math.sin(t) + Math.sin(t * 2);

//   }

  
//   sin3(t) {

//     return (Math.sin(t) + Math.sin(2.2 * t + 5.52) + Math.sin(2.9 * t + 0.93) + Math.sin(4.6 * t + 8.94)) / 4;

//   }

//   // from: https://ics.media/entry/11292
//   // normal distribution / 正規分布
//   normal() {
      
//     // 0.0未満、1.0以上になるケースがあるため
//     // その時は再計算を行う
//     var v;
//     while (true) {
//         v = this.calcNormal();
//         if (0 <= v && v < 1) {
//             break;
//         }
//     }

//     return v;

//   }

//   calcNormal() {

//     // 正規乱数
//     var r1 = Math.random();
//     var r2 = Math.random();
//     var value = Math.sqrt(-2.0 * Math.log(r1)) * Math.sin(2.0 * Math.PI * r2);
//     // 値を0以上1未満になるよう正規化する
//     value = (value + 3) / 6;
//     return value;

//   }

//   sign() {
    
//     return (Math.random()<0.5)? 1: -1;

//   }

//   // 時々、かなり飛ぶ
//   montecarlo() {

//     var r1 = Math.random();
//     var probability = Math.pow(1.0 - r1,8);

//     var r2 = Math.random();
//     if (r2 < probability) {
//       return r1;
//     }

//     return 0;

//   }

// }

