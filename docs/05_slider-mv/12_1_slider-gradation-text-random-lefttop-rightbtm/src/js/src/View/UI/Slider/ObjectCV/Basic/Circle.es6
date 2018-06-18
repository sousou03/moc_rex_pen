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

    this.p = new Point();

    this.p.x = gb.r.w / 2;
    this.p.y = gb.r.h / 2;
    this.p.rad = 100;

    this.p.startAng = 0;
    this.p.endAng = Math.PI / 2;

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
    //   .drawCircle(this.p.x, this.p.y, this.p.rad); // 正円

    // this.s.graphics
    //   .beginFill('#000')
    //   .drawEllipse(this.p.x, this.p.y, this.p.rad, this.p.rad); // 楕円 (x, y, 横半径, 縦の半径)

    // this.s.graphics
    //   .beginFill('#000')
    //   .arc(this.p.x, this.p.y, this.p.rad, this.p.startAng, this.p.endAng); // ( x y radius startAngle endAngle anticlockwise )

    // ------------------------------------------------------------
    //  stroke
    // ------------------------------------------------------------
    // this.s.graphics
    //   .beginStroke('#000')
    //   .drawCircle(this.p.x, this.p.y, this.p.rad); // 正円

    // this.s.graphics
    //   .beginStroke('#000')
    //   .drawEllipse(this.p.x, this.p.y, this.p.rad, this.p.rad);

    // this.s.graphics
    //   // .setStrokeStyle(5)
    //   .beginStroke('#000')
    //   .arc(this.p.x, this.p.y, this.p.rad, this.p.startAng, this.p.endAng); // ( x y radius startAngle endAngle anticlockwise )


  }

  show() {


  }

  hide() {

  }

}