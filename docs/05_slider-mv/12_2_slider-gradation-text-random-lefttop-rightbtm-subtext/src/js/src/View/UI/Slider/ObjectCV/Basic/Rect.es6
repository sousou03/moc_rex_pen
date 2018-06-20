// ------------------------------------------------------------
//
//  Bubble
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Point from '../Object_Point/Point.es6';

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

    // 四角形の4隅
    this.x = 0;
    this.y = 0;
    this.w = 375 / 2;
    this.h = 100;

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

    // fill
    this.s.graphics
      .beginFill('#000')
      .drawRect(this.x, this.y, this.w, this.h);

    // stroke
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