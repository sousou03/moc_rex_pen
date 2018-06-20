// ------------------------------------------------------------
//
//  Line
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Point from '../Object_Point/Point.es6';

import Params from '../../UtilCV/Params_Cover/Params.es6';

export default class Line extends Base {

  constructor(stage) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.p = new Params();

    // ready
    this.ready();

    this.add();

    this.loopStart = true;

  }


  ready() {

    this.text = '宗一郎';
    this.font = 'bold 100px YuGothic';
    this.color = '#000';

  }

  add() {

    // layer, object
    this.container = new createjs.Container();
    this.t = new createjs.Text(this.text, this.font, this.color);

    this.t.textAlign = 'center';
    this.t.textBaseline = 'middle';
    this.t.x = gb.r.w/2;
    this.t.y = gb.r.h/2;
    
    // add
    this.stage.addChild(this.t);

  }

  update() {

  }
　
  draw() {

  }

  show() {

  }

  hide() {

  }

}