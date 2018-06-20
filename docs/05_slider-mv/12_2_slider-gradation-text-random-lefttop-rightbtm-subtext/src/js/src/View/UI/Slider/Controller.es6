//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Slider from './ObjectCV/Slider/Controller.es6';

export default class Content extends Base {

  constructor($wrap, id) {

    super();

    this.$wrap = $wrap;
    this.id = id;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;
    // this.isRetina = (window.devicePixelRatio>=2)? true: false;
    this.isRetina = false;

    this.w = gb.r.w;
    this.h = gb.r.h;

    // canvas要素追加
    var dom = '<canvas id="'+this.id+'"></canvas>';
    this.$wrap.append(dom);
    // style, layout
    this.canvas = document.getElementById(this.id);
    this.stage = new createjs.Stage(this.canvas);
    $(this.canvas).css({position: 'fixed',top: 0,left: 0,'z-index': 0,opcaity:1})

    // obj生成
    this.add();

    this.onResize();

  }

  add() {

    // obj生成
    this.slider = new Slider(this.stage);

  }

  update() {

    this.stage.update();

  }

  timeline() {


  }

  onResize() {

    // attribute
    this.canvas.width = gb.r.w * window.devicePixelRatio;
    this.canvas.height = gb.r.h * window.devicePixelRatio;

    // css
    $(this.canvas).width(gb.r.w);
    $(this.canvas).height(gb.r.h);

    this.stage.scaleX = this.stage.scaleY = window.devicePixelRatio;

  }

}