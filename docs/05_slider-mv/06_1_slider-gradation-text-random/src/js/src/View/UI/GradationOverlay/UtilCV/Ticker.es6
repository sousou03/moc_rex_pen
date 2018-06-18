// ------------------------------------------------------------
//
//  Ticker
//
// ------------------------------------------------------------

import Easing from './Easing.es6';

export default class Ticker {

  constructor(ease='linear') {
  
    this.ticker = 0;
    this.duration = 0;
    
    this.from = 0;
    this.to = 1;

    this.setup(ease)

  }

  setup(ease) {

    this.e = new Easing();

    this.setEase(ease);

  }

  setEase(ease) {

    switch (ease){
      case 'linear':
        this.ease = this.e.linear.bind(this.e);
        break;
      case 'inBack':
        this.ease = this.e.inBack.bind(this.e);
        break;
      case 'inBounce':
        this.ease = this.e.inBounce.bind(this.e);
        break;
      case 'inCubic':
        this.ease = this.e.inCubic.bind(this.e);
        break;
      case 'inElastic':
        this.ease = this.e.inElastic.bind(this.e);
        break;
      case 'inExpo':
        this.ease = this.e.inExpo.bind(this.e);
        break;
      case 'inQuad':
        this.ease = this.e.inQuad.bind(this.e);
        break;
      case 'inQuart':
        this.ease = this.e.inQuart.bind(this.e);
        break;
      case 'inQuint':
        this.ease = this.e.inQuint.bind(this.e);
        break;
      case  'inSine':
        this.ease = this.e.inSine.bind(this.e);
        break;
      case 'outBack':
        this.ease = this.e.outBack.bind(this.e);
        break;
      case 'outBounce':
        this.ease = this.e.outBounce.bind(this.e);
        break;
      case 'outCirc':
        this.ease = this.e.outCirc.bind(this.e);
        break;
      case 'outCubic':
        this.ease = this.e.outCubic.bind(this.e);
        break;
      case 'outElastic':
        this.ease = this.e.outElastic.bind(this.e);
        break;
      case 'outExpo':
        this.ease = this.e.outExpo.bind(this.e);
        break;
      case 'outQuad':
        this.ease = this.e.outQuad.bind(this.e);
        break;
      case 'outQuart':
        this.ease = this.e.outQuart.bind(this.e);
        break;
      case 'outQuint':
        this.ease = this.e.outQuint.bind(this.e);
        break;
      case 'outSine':
        this.ease = this.e.outSine.bind(this.e);
        break;
      case 'inOutBack':
        this.ease = this.e.inOutBack.bind(this.e);
        break;
      case 'inOutBounce':
        this.ease = this.e.inOutBounce.bind(this.e);
        break;
      case 'inOutCirc':
        this.ease = this.e.inOutCirc.bind(this.e);
        break;
      case 'inOutCubic':
        this.ease = this.e.inOutCubic.bind(this.e);
        break;
      case 'inOutExpo':
        this.ease = this.e.inOutExpo.bind(this.e);
        break;
      case 'inOutQuad':
        this.ease = this.e.inOutQuad.bind(this.e);
        break;
      case 'inOutQuart':
        this.ease = this.e.inOutQuart.bind(this.e);
        break;
      case 'inOutQuint':
        this.ease = this.e.inOutQuint.bind(this.e);
        break;
      case  'inOutSine':
        this.ease = this.e.inOutSine.bind(this.e);
        break;
    }

  }
  
  start (duration, from, to) {

    this.ticker = 0;
    this.duration = duration;
    this.from = from;
    this.to = to;

  }
  
  update (dt) {
    this.ticker += dt;
    this.ticker = Math.min(this.ticker, this.duration);
  }
  
  getT () {

    if(this.duration <= 0) return 0;

    var t = gb.u.m.lerp(this.from, this.to, this.ticker / this.duration);

    return this.ease(t);

  }

}