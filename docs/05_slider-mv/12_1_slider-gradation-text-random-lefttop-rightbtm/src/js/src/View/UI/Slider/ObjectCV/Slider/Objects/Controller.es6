// ------------------------------------------------------------
//
//  Bubble
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Img from './Img.es6';

export default class Bubble extends Base {

  constructor(stage) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    this.len = 5;

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
      var img = new Img(this.stage, i, this.len)
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