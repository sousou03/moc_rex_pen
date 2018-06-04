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

    this.cp01 = 0;
    this.cp02 = 20;
    this.cp03 = 40;
    this.cp04 = 60;
    this.cp05 = 80;
    this.cp06 = 100;
    this.op01 = 1;
    this.op02 = 1;
    this.op03 = 1;
    this.op04 = 1;
    this.op05 = 1;
    this.op06 = 1;
    this.x = 0;
    this.y = 0;
    this.w = gb.r.w;
    this.h = gb.r.h;
    this.deg = 315;

    this.timeline();

  }

  update() {

    // pos
    // var x = Math.round(this.x / this.w * 100);
    // var y = Math.round(this.y / this.h * 100);

    // color
    var color01 = chroma("#fff").alpha(this.op01).css();
    var color02 = chroma("#fff").alpha(this.op02).css();
    var color03 = chroma("#fff").alpha(this.op03).css();
    var color04 = chroma("#fff").alpha(this.op04).css();
    var color05 = chroma("#fff").alpha(this.op05).css();
    var color06 = chroma("#fff").alpha(this.op06).css();

    // color pos
    var cp01 = this.cp01;
    var cp02 = this.cp02;
    var cp03 = this.cp03;
    var cp04 = this.cp04;
    var cp05 = this.cp05;
    var cp06 = this.cp06;

    // draw
    var grad = 'linear-gradient(' + this.deg + 'deg,' + 
                                 color01 + ' ' + cp01 + '%,' + 
                                 color02 + ' ' + cp02 + '%,' +
                                 color03 + ' ' + cp03 + '%,' + 
                                 color04 + ' ' + cp04 + '%,' +
                                 color05 + ' ' + cp05 + '%,' +
                                 color06 + ' ' + cp06 + '%)';


    TweenMax.set(this.$rad, {background: grad});

  }

  timeline() {

    var dur = 1.5;
    var tl = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 1.0, delay: 2.0});

    tl

      // show
      .to(this, dur, {
        op01: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 0)
      .to(this, dur, {
        op02: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 1)
      .to(this, dur, {
        op03: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 2)
      .to(this, dur, {
        op04: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 3)
      .to(this, dur, {
        op05: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 4)
      .to(this, dur, {
        op06: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 5)

      // // hide
      // .to(this, dur, {
      //   op03: 1,
      //   ease: Power2.easeInOut,
      // }, dur + 0.1 + 0.2 * 0)
      // .to(this, dur, {
      //   op02: 1,
      //   ease: Power2.easeInOut,
      // }, dur + 0.1 + 0.2 * 1)
      // .to(this, dur, {
      //   op01: 1,
      //   ease: Power2.easeInOut,
      // }, dur + 0.1 + 0.2 * 2)
      // .add(()=>{

      //   tl.pause();
      //   this.offU();

      // }, dur/10 * 6)

      // show move x
      // .set(this.$rad, {
      //   width: gb.r.w * 2,
      //   x: -gb.r.w,
      // }, 0.0)
      // .to(this.$rad, dur, {
      //   x: gb.r.w,
      //   ease: Power2.easeInOut,
      // }, 0.0)

      // show from right
      // .to(this, dur, {
      //   cp02: 0,
      //   ease: Power2.easeInOut,
      // }, 0.3)
      // .to(this, dur, {
      //   op02: 0,
      //   ease: Power2.easeInOut,
      // }, 0.5)




  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}