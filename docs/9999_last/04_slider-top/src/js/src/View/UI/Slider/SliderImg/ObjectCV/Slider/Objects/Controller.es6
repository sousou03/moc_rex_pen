// ------------------------------------------------------------
//
//  Bubble
//
// ------------------------------------------------------------

import Base from '../../../../Util/Base.es6';

import Img from './Img.es6';

export default class Bubble extends Base {

  constructor(stage, $wrap) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;
    this.$wrap = $wrap;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    // this.len = window.pen_TopSlider.length;
    this.len = this.$wrap.find('.sliderContents').length;

    // ready
    this.ready();

    // add
    this.add();

    this.timeline();

  }


  ready() {

    

  }

  add() {

    this.imgs = [];

    for (var i = 0; i < this.len; i++) {

      var path = window.pen_TopSlider[i];
      var img = new Img(this.stage, i, this.len, this.$wrap, path)
      this.imgs.push(img);
    }
    

  }

  update() {



  }

  timeline() {

  }

  onResize() {


  }

}