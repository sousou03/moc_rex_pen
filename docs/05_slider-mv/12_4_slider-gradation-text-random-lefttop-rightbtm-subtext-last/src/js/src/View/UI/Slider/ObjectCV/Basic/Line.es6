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

    this.x = 0;

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.p = new Params();

    // ready
    this.ready();

    // add
    this.add();

    this.loopStart = true;

  }


  ready() {

    this.pList = [];
    this.len = 10;

    for (var i = 0; i < this.len; i++) {

      var p = new Point();

      // 初期値
      if (i==0) {

        p.x = gb.r.w / 2;
        p.y = gb.r.h / 2;

      // 初期値以降の値
      } else {

        p.x = Math.random() * gb.r.w;
        p.y = Math.random() * gb.r.h;

      }

      this.pList.push(p);

    }

    this.color = '#000';

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

    this.s.graphics
      .setStrokeStyle(1)
      .beginStroke(this.color)
      // .beginFill(this.color)

    for (var i = 0; i < this.len; i++) {
      
      var p = this.pList[i];

      if (i==0) this.s.graphics.moveTo(p.x,p.y);
      else this.s.graphics.lineTo(p.x,p.y);
 
    }

    // this.s.graphics.endStroke(); // ← ほぼ意味ないのか？
    this.s.graphics.closePath(); // パスを閉じる

  }

  show() {

  }

  hide() {

  }

}