//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from '../Util/Base.es6';

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

    this.w = this.$wrap.width();
    this.h = this.$wrap.height();

    // canvas要素追加
    var dom = '<canvas id="'+this.id+'"></canvas>';
    this.$wrap.prepend(dom);
    // style, layout
    this.canvas = document.getElementById(this.id);
    this.stage = new createjs.Stage(this.canvas);
    $(this.canvas).css({position: 'absolute',top: 0,left: 0,'z-index': 0,opcaity:1})

    // obj生成
    this.add();

    this.onResize();

  }

  add() {

    // obj生成
    this.slider = new Slider(this.stage, this.$wrap);

  }

  update() {

    this.stage.update();

  }

  timeline() {


  }

  onResize() {

    this.w = this.$wrap.width();
    this.h = this.$wrap.height();

    // attribute
    this.canvas.width = this.w * window.devicePixelRatio;
    this.canvas.height = this.h * window.devicePixelRatio;

    // css
    $(this.canvas).width(this.w);
    $(this.canvas).height(this.h);

    this.stage.scaleX = this.stage.scaleY = window.devicePixelRatio;

  }

}