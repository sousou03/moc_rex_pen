//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Render extends Base {

  constructor(stage, obj) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.obj = obj;
    this.imgs = this.obj.imgs;

    this.setup();
    this.setEvents();

  }

  setup() {

  }

  next(current, next, prev) {
    var cb=()=>{};  

    var tl = new TimelineMax();

    var x = 130;
    var cur = this.imgs[current].inner;
    var pre = this.imgs[prev].inner;
    var current_c = this.imgs[current].container;
    var prev_c = this.imgs[prev].container;

    // zindex
    this.stage.setChildIndex(current_c, this.stage.getNumChildren()-1);

    tl
      .set(cur, {
        x: x,
        alpha: 0,
        // zIndex: 2,
      }, 0.0)
      .set(pre, {
        // zIndex: 1,
      }, 0.0)

      .to(cur, 2.3, {
        alpha: 1,
        ease: Power2.easeInOut,
      }, 0.0)
      .to(cur, 2.3, {
        x: 0,
        ease: Power3.easeOut,
      }, 0.0)
      // .to(pre, 2.3, {
      //   // x: -x,
      //   ease: Power2.easeOut,
      // }, 0.0)
      .to(pre, 2.3, {
        alpha: 0,
        ease: Power4.easeIn,
      }, 0.0)

  }

  prev(current, next, prev) {

    var tl = new TimelineMax();

    var x = - 130;
    var cur = this.imgs[current].inner;
    var pre = this.imgs[prev].inner;
    var current_c = this.imgs[current].container;
    var prev_c = this.imgs[prev].container;

    // zindex
    this.stage.setChildIndex(current_c, this.stage.getNumChildren()-1);

    tl
      .set(cur, {
        x: x,
        alpha: 0,
        // zIndex: 2,
      }, 0.0)
      .set(pre, {
        // zIndex: 1,
      }, 0.0)

      .to(cur, 2.3, {
        alpha: 1,
        ease: Power2.easeInOut,
      }, 0.0)
      .to(cur, 2.3, {
        x: 0,
        ease: Power3.easeOut,
      }, 0.0)
      // .to(pre, 2.3, {
      //   // x: -x,
      //   ease: Power2.easeOut,
      // }, 0.0)
      .to(pre, 2.3, {
        alpha: 0,
        ease: Power4.easeIn,
      }, 0.0)

  }

  next_op(current, next, prev) {

    var tl = new TimelineMax();

    var x = 100;
    var cur = this.imgs[current].inner;
    var pre = this.imgs[prev].inner;
    var current_c = this.imgs[current].container;
    var prev_c = this.imgs[prev].container;

    // zindex
    this.stage.setChildIndex(current_c, this.stage.getNumChildren()-1);

    tl
      .set(cur, {
        x: x,
        alpha: 0,
        // zIndex: 2,
      }, 0.0)
      .set(pre, {
        // zIndex: 1,
      }, 0.0)

      .to(cur, 2.0, {
        alpha: 1,
        x: 0,
        ease: Power4.easeOut,
      }, 0.0)
      .to(pre, 2.0, {
        alpha: 0,
        ease: Power2.easeInOut,
      }, 0.0)

  }

  prev_op(current, next, prev) {

    var tl = new TimelineMax();

    var x = - 100;
    var cur = this.imgs[current].inner;
    var pre = this.imgs[prev].inner;
    var current_c = this.imgs[current].container;
    var prev_c = this.imgs[prev].container;

    // zindex
    this.stage.setChildIndex(current_c, this.stage.getNumChildren()-1);

    tl
      .set(cur, {
        x: x,
        alpha: 0,
        // zIndex: 2,
      }, 0.0)
      .set(pre, {
        // zIndex: 1,
      }, 0.0)

      .to(cur, 2.0, {
        alpha: 1,
        x: 0,
        ease: Power4.easeOut,
      }, 0.0)
      .to(pre, 2.0, {
        alpha: 0,
        ease: Power2.easeInOut,
      }, 0.0)

  }

  onResize() {


  }

}
