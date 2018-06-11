//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';

export default class Controller extends Base {

  constructor($target) {

    super();

    this.isUEv = true;
    this.isUpdate = true;

    this.$layer = $('.layer');
    this.$cursor = $('.cursor');

    this.setup();
    this.setEvents();

  }

  setup() {

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
      $(this).addClass('bg')
      
      
    });

    // arrow move
    this.chw = 15;
    this.chh = 15;
    this.mx = 0;
    this.my = 0;
    this.easing = 1;

  }

  update() {
    
    var x = gb.m.x;
    var y = gb.m.y;

    // pos
    var gx = x - this.chw;
    var gy = y - this.chh;
    this.mx += (gx - this.mx) * this.easing;
    this.my += (gy - this.my) * this.easing;

    // pos
    TweenMax.set(this.$cursor, {x: this.mx, y: this.my});

  }

  show() {

    TweenMax.killTweensOf(this.$cursor);

    var tl = new TimelineMax();

    tl
      // op
      .to(this.$cursor, 0.01, {
        opacity: 1, 
        ease: Power2.easeInOut,
        onStart: ()=>{
          $('html,body').css('cursor', 'pointer');
        }
      }, 0.0)
      // color
      .set(this.$cursor, {backgroundColor: 'rgba(217,52,72,1)'}, 0.0)
      .to(this.$cursor, 0.0, {
        scaleX: 1.0, 
        scaleY: 1.0,
        ease: Expo.easeOut,
      }, 0.0)
      .to(this.$cursor, 0.7, {
        backgroundColor: 'rgba(217,52,72,0)', 
        ease: Power2.easeOut,
      }, 0.1)

  }

  hide() {

    TweenMax.killTweensOf(this.$cursor);

    TweenMax.to(this.$cursor, 0.4, {opacity: 0, scaleX: 0.2, scaleY: 0.2, ease: Power2.easeInOut,
      onStart: ()=>{
        $('html,body').css('cursor', 'default');
      },
      // onComplete: ()=>{
      //   $('html,body').css('cursor', 'default');
      // }
    })      

  }  　

  setEvents() {

    var self = this;

    super.setEvents();

    this.$layer.on('mouseenter', this.show.bind(this));
    this.$layer.on('mouseleave', this.hide.bind(this));

  }

}
