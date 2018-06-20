// ------------------------------------------------------------
//
//  Line
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Line extends Base {

  constructor(stage) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isLoad = false;

    // ready
    this.ready();

  }


  ready() {

    this.img = new Image();
    this.img.onload = this.add.bind(this);
    this.img.src = './assets/resource/img/hero.jpg';

  }

  add() {

    // layer, object
    this.container = new createjs.Container();
    this.bmp = new createjs.Bitmap(this.img);

    // Bitmapの中心座標を取得
    var x = this.bmp.getBounds().width / 2;
    var y = this.bmp.getBounds().height / 2;
    this.x = x;
    this.y = y;

    // 画像の中心に基準点を
    this.bmp.x = x;
    this.bmp.y = y;
    this.bmp.regX = x;
    this.bmp.regY = y;
    this.bmp.rotation = 25;
    this.bmp.scaleX = 0.5;
    this.bmp.scaleY = 0.5;

    // pos
    this.container.x = gb.r.w/2 - x;
    this.container.y = gb.r.h/2 - y;
    
    // add
    this.container.addChild(this.bmp);
    this.stage.addChild(this.container);

    this.isLoad = true;

  }

  update() {

    if (!this.isLoad) return;

    // pos
    this.container.x = gb.r.w/2 - this.x;
    this.container.y = gb.r.h/2 - this.y;

  }
　
  draw() {

  }

  show() {

  }

  hide() {

  }

}