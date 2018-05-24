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

      // var w = gb.r.w / 2 + gb.r.w * (Math.random() - 0.5);
      // var h = gb.r.h / 2 + gb.r.h * (Math.random() - 0.5);
      // var x = gb.r.w / 2 + gb.r.w * (Math.random() - 0.5) - w / 2;
      // var y = 300 * index;
      var w = gb.r.w;
      var h = gb.r.h;
      var x = 0;
      var y = gb.r.h * index;

      TweenMax.set($(this), {
        x: x,
        y: y,
        width: w,
        height: h,
      });
      
      
    });

    // arrow move
    this.chw = 15;
    this.chh = 15;
    this.mx = 0;
    this.my = 0;
    this.easing = 0.19;

    this.pmx = 0;
    this.pmy = 0;
    this.pmx_r = 0;
    this.pmy_r = 0;
    this.w = 0;
    this.h = 0;
    this.d = 0;

    this.smx = 0; //size mouse x;
    this.smy = 0; //size mouse y;

  }

  update() {

    this.updateM();

  }

  updateM() {

    var x = gb.m.x;
    var y = gb.m.y;


    this.drawM(x, y);

    // pos
    this.pmx = this.mx;
    this.pmy = this.my;

    if (Math.abs(this.pmx_r-this.mx)<0.5||y==Math.abs(this.pmy_r-this.my)<0.5) return;
    // rotate
    this.pmx_r = this.mx;
    this.pmy_r = this.my;

  }

  drawM(x, y) {

    // size
    this.smx += (x - this.smx) * this.easing;
    this.smy += (y - this.smy) * this.easing;
    var dis = m.dist({x: x,y: y},{x: this.smx,y: this.smy})
    this.w += ((this.chw*2 + dis*0.25) - this.w) * this.easing;
    this.h += ((this.chh*2 - dis*0.05) - this.h) * this.easing;
    // this.w = 100;
    // this.w = this.chw * 2;
    // log(dis);

    // pos
    // var gx = x - this.w / 2;
    var gx = x - this.chw;
    var gy = y - this.chh;
    // this.mx += (gx - this.mx) * this.easing;
    // this.my += (gy - this.my) * this.easing;
    this.mx += (gx - this.mx) * 0.25;
    this.my += (gy - this.my) * 0.25;

    // roate
    // var rad = m.atan2({x: x,y: y}, {x: gb.r.w / 2,y: gb.r.h / 2});
    var rad = m.atan2({x: this.mx,y: this.my}, {x: this.pmx_r,y: this.pmy_r});
    var d = m.degree(rad);
    // this.d += ((-180 + d) - this.d) * this.easing;

    // log(rad);
       // log(d)
    // log(this.mx, this.my, this.pmx_r, this.pmy_r);
    // log(rad, d, x, y, this.pmx_r, this.pmy_r);

    // pos
    TweenMax.set(this.$cursor, {x: this.mx, y: this.my});
    // size
    // TweenMax.set(this.$cursor, {width: this.w, height: this.chh*2});
    TweenMax.set(this.$cursor, {width: this.w, height: this.h});
    // rotation
    // TweenMax.set(this.$cursor, {rotationZ: this.d});
    TweenMax.set(this.$cursor, {rotationZ: d});

  }
  
  show() {

    TweenMax.killTweensOf(this.$cursor);

    var tl = new TimelineMax();

    tl
      // op
      .to(this.$cursor, 0.7, {
        opacity: 1, 
        ease: Power2.easeInOut,
        onStart: ()=>{
          $('html,body').css('cursor', 'none');
        }
      })
      // color
      .set(this.$cursor, {backgroundColor: 'rgba(217,52,72,1)', scaleX: 0.2, scaleY: 0.2}, 0.1)
      .to(this.$cursor, 0.7, {
        scaleX: 1.0, 
        scaleY: 1.0,
        ease: Expo.easeOut,
      }, 0.1)
      .to(this.$cursor, 0.7, {
        backgroundColor: 'rgba(217,52,72,0)', 
        ease: Power2.easeOut,
      }, 0.3)

  }

  hide() {

    TweenMax.killTweensOf(this.$cursor);

    TweenMax.to(this.$cursor, 0.4, {opacity: 0, scaleX: 0.2, scaleY: 0.2, ease: Power2.easeInOut,
      onComplete: ()=>{
        $('html,body').css('cursor', 'default');
      }
    })      

  }  　

  onMousemove() {

    // this.updateM();

  }

  setEvents() {

    var self = this;

    super.setEvents();

    this.$layer.on('mouseenter', this.show.bind(this));
    this.$layer.on('mouseleave', this.hide.bind(this));
    this.$layer.on('mousemove', this.onMousemove.bind(this));

  }

}
