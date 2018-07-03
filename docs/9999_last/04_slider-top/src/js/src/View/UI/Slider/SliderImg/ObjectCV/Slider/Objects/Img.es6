// ------------------------------------------------------------
//
//  Line
//
// ------------------------------------------------------------

import Base from '../../../../Util/Base.es6';

export default class Line extends Base {

  constructor(stage, i, len, $wrap) {

    super();

    this.stage = stage;
    this.$wrap = $wrap;
    this.c = this.stage.canvas;

    this.index = i;
    this.len = len;

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.isUEv = true;
    this.isREv = true;
    this.isLoad = false;

    // ready
    this.ready();

  }


  ready() {

    this.img = new Image();
    this.img.onload = this.add.bind(this);
    this.img.src = './assets/resource/img/img0'+(this.index+1)+'.jpeg';

  }

  add() {

    // layer, object
    this.container = new createjs.Container();
    this.inner = new createjs.Container();
    this.bmp = new createjs.Bitmap(this.img);

    // Bitmapの中心座標を取得
    this.imgw = this.bmp.getBounds().width;
    this.imgh = this.bmp.getBounds().height;

    // 画像の中心に基準点を
    this.bmp.x = this.imgw / 2;
    this.bmp.y = this.imgh / 2;
    this.bmp.regX = this.imgw / 2;
    this.bmp.regY = this.imgh / 2;
    this.bmp.rotation = 0;
    this.bmp.scaleX = 1;
    this.bmp.scaleY = 1;

    // pos
    this.container.x = this.$wrap.width()/2 - this.imgw / 2;
    this.container.y = this.$wrap.height()/2 - this.imgh / 2;

    // op
    this.inner.alpha = 0;
    if (this.index==0) this.inner.alpha = 1;
    
    // add
    this.inner.addChild(this.bmp);
    this.container.addChild(this.inner);
    this.stage.addChild(this.container);

    // z-index
    this.stage.setChildIndex(this.container, this.len - 1 - this.index);
    log(this.len - 1 - this.index);

    this.isLoad = true;

    this.onResize();

  }

  update() {

    // if (!this.isLoad) return;

    // pos
    // this.container.x = this.$wrap.width()/2 - this.imgw / 2;
    // this.container.y = this.$wrap.height()/2 - this.imgh / 2;

  }
　
  draw() {

  }

  show() {

  }

  hide() {

  }

  onResize() {

    this.ratioW = this.$wrap.height() / this.$wrap.width();
    this.ratio = this.imgh / this.imgw;

    // pos
    this.container.x = this.$wrap.width() / 2 - this.imgw / 2;
    this.container.y = this.$wrap.height() / 2 - this.imgh / 2;

    // size cover
    if (this.ratioW > this.ratio) {

      var scale = this.$wrap.height() / this.imgh * 1.01;

      this.bmp.scaleX = scale;
      this.bmp.scaleY = scale;

    } else if ( this.ratioW <= this.ratio) {

      var scale = this.$wrap.width() / this.imgw * 1.01;

      this.bmp.scaleX = scale;
      this.bmp.scaleY = scale;

    }

  }

}