//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import MouseTrail from './MouseTrail/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    this.$layer = $('.layer');

    // layer setup
    this.$layer.each(function(index, el) {

      var w = gb.r.w / 2 + gb.r.w * (Math.random() - 0.5) * 0.5;
      var h = gb.r.h / 2 + gb.r.h * (Math.random() - 0.5) * 0.5;
      var x = gb.r.w / 2 + gb.r.w * (Math.random() - 0.5) - w / 2;
      var y = 300 * index;
      // var w = gb.r.w;
      // var h = gb.r.h;
      // var x = 0;
      // var y = gb.r.h * index;

      TweenMax.set($(this), {
        x: x,
        y: y,
        width: w,
        height: h,
      });
      
    });

    new MouseTrail();

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}