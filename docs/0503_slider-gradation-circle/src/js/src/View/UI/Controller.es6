//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import chroma from 'chroma-js';

export default class Controller extends Base {

  constructor() {

    super();

    this.isUEv = true;
    this.isREv = true;

    this.setup()
    this.setEvents();

  }

  setup() {

    this.$rad = $('.radial');

    this.op = 1;
    this.p01 = 0;
    this.x = 0;
    this.y = 0;
    this.w = gb.r.w;
    this.h = gb.r.h;

    this.timeline();

  }

  update() {

    // pos
    var x = Math.round(this.x / this.w * 100);
    var y = Math.round(this.y / this.h * 100);

    // progress
    var p01 = this.p01;
    var p02 = 100;

    // color
    var color01 = chroma("#fff").alpha(this.op).css();
    var color02 = '#fff';

    var grad = 'radial-gradient(circle at ' + x + '% ' + y + '%, '+color01+' '+p01+'%, '+color02+' '+p02+'%)';  
    TweenMax.set(this.$rad, {background: grad});

  }

  timeline() {

    var tl = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 1.0});

    tl
      // show
      .to(this, 1.5, {
        op: 0,
        ease: Power2.easeInOut,
      },0.0)
      .to(this, 1.5, {
        p01: 100,
        ease: Power2.easeInOut,
      },0.0)

      // center move
      .set(this, {
        x: gb.r.w,
        y: gb.r.h,
      }, 1.5)

      // hide
      .to(this, 1.5, {
        op: 1,
        ease: Power2.easeInOut,
      }, 1.6)
      .to(this, 1.5, {
        p01: 0,
        ease: Power2.easeInOut,
      }, 1.6)


  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}