// ------------------------------------------------------------
//
//  Bubble
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Vec2 from '../Object_Point/Point.es6';

import Params from '../../UtilCV/Params_Cover/Params.es6';

export default class Bubble extends Base {

  constructor(stage) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.setup();
    this.setEvents();

  }

  setup() {

    // param
    // this.p = new Params();

    // ready
    this.ready();

    // add
    this.add();

    // loop start
    this.loopStart = true;

  }


  ready() {

    this.p = new Vec2();

    this.p.x = gb.r.w / 2;
    this.p.y = gb.r.h / 2;

    this.p.w = 3;
    this.p.h = 3;

    this.p.rad = 5;

  }

  add() {

    // layer, object
    // plane
    this.s = new createjs.Shape();

    // add
    this.stage.addChild(this.s);

  }

  update() {


  }
　
  draw() {

    this.s.graphics.clear(); 

    // ------------------------------------------------------------
    //  fill
    // ------------------------------------------------------------
    // this.s.graphics
    //   .beginFill('#000')
    //   .drawRect(this.p.x, this.p.y, this.p.w, this.p.h);

    this.s.graphics
      .beginFill('#000')
      .drawCircle(this.p.x, this.p.y, this.p.rad); // 正円

    // ------------------------------------------------------------
    //  stroke
    // ------------------------------------------------------------
    // this.s.graphics
    //   .setStrokeStyle(5)
    //   .beginStroke('#000')
    //   .drawRect(this.x, this.y, this.w, this.h);

  }

  show() {


  }

  hide() {

  }

}