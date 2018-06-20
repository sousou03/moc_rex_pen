// ------------------------------------------------------------
//
//  Bubble
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import chroma from 'chroma-js';

export default class Bubble extends Base {

  constructor(stage) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    // ready
    this.ready();

    // add
    this.add();

    // this.timeline();

  }


  ready() {

    // deg
    this.deg = {
      start: {x: 0,y: 0},
      end: {x: gb.r.w,y: gb.r.h}
    }

    // opacity
    this.op1 = 1;
    this.op2 = 1;
    this.op3 = 1;
    this.op4 = 1;
    this.op5 = 1;
    this.op6 = 1;
    this.op7 = 1;
    this.op8 = 1;
    this.op9 = 1;
    this.op10 = 1;
    this.op11 = 1;
    
    this.dur = 1.2;
    this.delay = 0.15;

  }

  add() {

    this.s = new createjs.Shape();
    this.stage.addChild(this.s);

  }

  update() {

    // clear
    this.s.graphics.clear();

    var color1 = chroma("#fff").alpha(this.op1).css();
    var color2 = chroma("#fff").alpha(this.op2).css();
    var color3 = chroma("#fff").alpha(this.op3).css();
    var color4 = chroma("#fff").alpha(this.op4).css();
    var color5 = chroma("#fff").alpha(this.op5).css();
    var color6 = chroma("#fff").alpha(this.op6).css();
    var color7 = chroma("#fff").alpha(this.op7).css();
    var color8 = chroma("#fff").alpha(this.op8).css();
    var color9 = chroma("#fff").alpha(this.op9).css();
    var color10 = chroma("#fff").alpha(this.op10).css();
    var color11 = chroma("#fff").alpha(this.op11).css();


    this.s.graphics
      .beginLinearGradientFill(
          [color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11],
          [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          this.deg.start.x, this.deg.start.y, this.deg.end.x, this.deg.end.y
        )
      .drawRect(0, 0, gb.r.w, gb.r.h); 

  }

  show() {

    var tl = new TimelineMax({});

    tl

      // show
      .to(this, this.dur, {
        op1: 0,
        ease: Power1.easeInOut,
      }, this.delay * 0)
      .to(this, this.dur, {
        op2: 0,
        ease: Power1.easeInOut,
      }, this.delay * 1)
      .to(this, this.dur, {
        op3: 0,
        ease: Power1.easeInOut,
      }, this.delay * 2)
      .to(this, this.dur, {
        op4: 0,
        ease: Power1.easeInOut,
      }, this.delay * 3)
      .to(this, this.dur, {
        op5: 0,
        ease: Power1.easeInOut,
      }, this.delay * 4)
      .to(this, this.dur, {
        op6: 0,
        ease: Power1.easeInOut,
      }, this.delay * 5)
      .to(this, this.dur, {
        op7: 0,
        ease: Power1.easeInOut,
      }, this.delay * 6)
      .to(this, this.dur, {
        op8: 0,
        ease: Power1.easeInOut,
      }, this.delay * 7)
      .to(this, this.dur, {
        op9: 0,
        ease: Power1.easeInOut,
      }, this.delay * 8)
      .to(this, this.dur, {
        op10: 0,
        ease: Power1.easeInOut,
      }, this.delay * 9)
      .to(this, this.dur, {
        op11: 0,
        ease: Power1.easeInOut,
      }, this.delay * 10)


  }

  hide() {

    var tl = new TimelineMax({});

    tl

      // show
      .to(this, this.dur, {
        op1: 1,
        ease: Power1.easeInOut,
      }, this.delay * 0)
      .to(this, this.dur, {
        op2: 1,
        ease: Power1.easeInOut,
      }, this.delay * 1)
      .to(this, this.dur, {
        op3: 1,
        ease: Power1.easeInOut,
      }, this.delay * 2)
      .to(this, this.dur, {
        op4: 1,
        ease: Power1.easeInOut,
      }, this.delay * 3)
      .to(this, this.dur, {
        op5: 1,
        ease: Power1.easeInOut,
      }, this.delay * 4)
      .to(this, this.dur, {
        op6: 1,
        ease: Power1.easeInOut,
      }, this.delay * 5)
      .to(this, this.dur, {
        op7: 1,
        ease: Power1.easeInOut,
      }, this.delay * 6)
      .to(this, this.dur, {
        op8: 1,
        ease: Power1.easeInOut,
      }, this.delay * 7)
      .to(this, this.dur, {
        op9: 1,
        ease: Power1.easeInOut,
      }, this.delay * 8)
      .to(this, this.dur, {
        op10: 1,
        ease: Power1.easeInOut,
      }, this.delay * 9)
      .to(this, this.dur, {
        op11: 1,
        ease: Power1.easeInOut,
      }, this.delay * 10)


  }

  onResize() {


  }

}