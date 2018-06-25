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

    // ------------------------------------------------------------
    //  曲線を閉じない
    // ------------------------------------------------------------
    this.drawCruve(this.pList);


    // ------------------------------------------------------------
    //  最後まで曲線で閉じる
    // ------------------------------------------------------------
    // this.drawCruveClosed(this.pList);

  }

  drawCruve(points) {

    this.s.graphics
      .setStrokeStyle(1)
      .beginStroke(this.color)
      // .beginFill(this.color)

    for (var i = 0; i < this.len - 1; i++) {
      
      var p = points[i];

      // 初期値
      if (i==0) { 

        this.s.graphics.moveTo(p.x,p.y);

      // 初期値以降
      } else {

        var np = points[i+1]; // next point

        var x = (p.x + np.x)/2;
        var y = (p.y + np.y)/2;
        
        this.s.graphics.quadraticCurveTo(p.x, p.y, x, y); // (cpx, cpy, x, y) cpx, cpyを通ってx, yで終わる

      }
    
    }

    this.s.graphics.endStroke(); // ← ほぼ意味ないのか？
    // this.s.graphics.closePath(); // パスを閉じる

  }

  drawCruveClosed(points) {

    this.s.graphics
      .setStrokeStyle(1)
      .beginStroke(this.color)
      // .beginFill(this.color)

    // 初期値
    var first = points[0];
    var last = points[this.len-1];
    var x = (last.x + first.x)/2;
    var y = (last.y + first.y)/2;
    this.s.graphics.moveTo(x,y);

    // 初期値以降
    for (var i = 0; i < this.len; i++) {
      
      var p = points[i%this.len];
      var np = points[(i+1)%this.len]; // next point

      var x = (p.x + np.x)/2;
      var y = (p.y + np.y)/2;
      
      this.s.graphics.quadraticCurveTo(p.x, p.y, x, y); // (cpx, cpy, x, y) cpx, cpyを通ってx, yで終わる
    
    }

    this.s.graphics.endStroke();
    // this.s.graphics.closePath(); // パスを閉じる

  }

  show() {

  }

  hide() {

  }

}