//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Gradation from './ObjectCV/Gradation.es6';

import Base from '_MyLibs/Util/Base.es6';

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

    this.w = gb.r.w;
    this.h = gb.r.h;

    // canvas要素追加
    var dom = '<canvas id="'+this.id+'"></canvas>';
    this.$wrap.append(dom);
    // style, layout
    this.canvas = document.getElementById(this.id);
    this.stage = new createjs.Stage(this.canvas);
    $(this.canvas)
      .css({position: 'fixed',top: 0,left: 0,'z-index': 9999,opcaity:1})
      .css({'pointer-events': 'none'})

    this.onResize();

    // obj生成
    this.add();

  }

  add() {

    // obj生成
    this.c = new Gradation(this.stage);

  }

  update() {

    this.stage.update();

  }

  timeline() {


  }

  onResize() {

    // attribute
    this.canvas.width = gb.r.w;
    this.canvas.height = gb.r.h;

    // css
    // $(this.canvas).width(this.w/2);
    // $(this.canvas).height('auto');

  }

}