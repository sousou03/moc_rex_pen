//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import chroma from 'chroma-js';

export default class Controller extends Base {

  constructor($wrap) {

    super();

    this.$wrap = $wrap;

    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    this.$rad = this.$wrap.find('.radial');

    this.cp01 = 0;
    this.cp02 = 10;
    this.cp03 = 20;
    this.cp04 = 30;
    this.cp05 = 40;
    this.cp06 = 50;
    this.cp07 = 60;
    this.cp08 = 70;
    this.cp09 = 80;
    this.cp10 = 90;
    this.cp11 = 100;
    this.op01 = 1;
    this.op02 = 1;
    this.op03 = 1;
    this.op04 = 1;
    this.op05 = 1;
    this.op06 = 1;
    this.op07 = 1;
    this.op08 = 1;
    this.op09 = 1;
    this.op10 = 1;
    this.op11 = 1;
    this.x = 0;
    this.y = 0;
    this.w = gb.r.w;
    this.h = gb.r.h;
    this.deg = 135;

    // this.timeline();

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
    var color07 = chroma("#fff").alpha(this.op07).css();
    var color08 = chroma("#fff").alpha(this.op08).css();
    var color09 = chroma("#fff").alpha(this.op09).css();
    var color10 = chroma("#fff").alpha(this.op10).css();
    var color11 = chroma("#fff").alpha(this.op11).css();

    // color pos
    var cp01 = this.cp01;
    var cp02 = this.cp02;
    var cp03 = this.cp03;
    var cp04 = this.cp04;
    var cp05 = this.cp05;
    var cp06 = this.cp06;
    var cp07 = this.cp07;
    var cp08 = this.cp08;
    var cp09 = this.cp09;
    var cp10 = this.cp10;
    var cp11 = this.cp11;

    // draw
    var grad = 'linear-gradient(' + this.deg + 'deg,' + 
                                 color01 + ' ' + cp01 + '%,' + 
                                 color02 + ' ' + cp02 + '%,' +
                                 color03 + ' ' + cp03 + '%,' + 
                                 color04 + ' ' + cp04 + '%,' +
                                 color05 + ' ' + cp05 + '%,' +
                                 color06 + ' ' + cp06 + '%,' + 
                                 color07 + ' ' + cp07 + '%,' +
                                 color08 + ' ' + cp08 + '%,' + 
                                 color09 + ' ' + cp09 + '%,' +
                                 color10 + ' ' + cp10 + '%,' +
                                 color11 + ' ' + cp11 + '%)';


    TweenMax.set(this.$rad, {background: grad});

  }

  show() {

    var dur = 1.0;
    var tl = new TimelineMax({});

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
      .to(this, dur, {
        op07: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 6)
      .to(this, dur, {
        op08: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 7)
      .to(this, dur, {
        op09: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 8)
      .to(this, dur, {
        op10: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 9)
      .to(this, dur, {
        op11: 0,
        ease: Power1.easeInOut,
      }, dur / 12 * 10)


  }

  hide() {

    // this.deg = 135 + 180;
    var dur = 1.0;
    var tl = new TimelineMax({});

    tl

      // show
      .to(this, dur, {
        op01: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 0)
      .to(this, dur, {
        op02: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 1)
      .to(this, dur, {
        op03: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 2)
      .to(this, dur, {
        op04: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 3)
      .to(this, dur, {
        op05: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 4)
      .to(this, dur, {
        op06: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 5)
      .to(this, dur, {
        op07: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 6)
      .to(this, dur, {
        op08: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 7)
      .to(this, dur, {
        op09: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 8)
      .to(this, dur, {
        op10: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 9)
      .to(this, dur, {
        op11: 1,
        ease: Power1.easeInOut,
      }, dur / 12 * 10)


  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}