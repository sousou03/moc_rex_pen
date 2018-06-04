//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from './Base.es6';

import MouseMgr from './MouseMgr.es6';

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

    this.hw = 15; // half width
    this.hh = 15; // half height
    this.mx = 0;
    this.my = 0;
    this.easing = 1;

    this.m = new MouseMgr();

  }

  update() {
    
    var x = this.m.x;
    var y = this.m.y;

    // pos
    var gx = x - this.hw; 
    var gy = y - this.hh;
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
          $('html,body').css('cursor', 'none');
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
      onComplete: ()=>{
        $('html,body').css('cursor', 'default');
      }
    })      

  }  　

  setEvents() {

    var self = this;

    super.setEvents();

    this.$layer.on('mouseenter', this.show.bind(this));
    this.$layer.on('mouseleave', this.hide.bind(this));

  }

}
