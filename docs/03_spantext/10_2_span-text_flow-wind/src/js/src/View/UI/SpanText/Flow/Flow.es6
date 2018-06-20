// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// cf
// https://codepen.io/Pillowfication/pen/PNEJbY

import * as v from 'Util/Val/index.es6';

export default class Dom {

  constructor($target, index) {

    this.$target = $target;
    this.index = index;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.deviation = 100;
    this.frame = 0;
    this.basex = 10000 * Math.random();
    this.basey = 10000 * Math.random();
    this.basez = 10000 * Math.random();
    this.offset = Math.random() * Math.PI * 2;

    // create close
    this.createClone();

  }

  createClone() {

    // create clone
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    $(this.outer).addClass('spanouter');
    $(this.inner).addClass('spaninner');
    this.outer.appendChild(this.inner);
    var $clone = this.$target.clone();
    this.defw = this.$target.width();
    this.defh = this.$target.height();
    $(this.inner).append($clone);
    // $(this.inner).css({'margin-left': -this.defw/2,'margin-top': -this.defh/2}); // 上下左右中央に

    // set style
    this.outerStyle = this.outer.style
    this.innerStyle = this.inner.style;
    this.outerStyle.position = 'absolute';
    this.outerStyle.width  = (this.defw + 'px');
    this.outerStyle.height = (this.defh + 'px');
    this.innerStyle.width  = '100%';
    this.innerStyle.height = '100%';

    // rotate
    this.axis = 'rotate3D(' + Math.cos(360 * Math.random()) + ',' + Math.cos(360 * Math.random()) + ',0,';
    this.theta = 360 * Math.random();
    var vThetaMin = .4;
    var vThetaMax = .7 - vThetaMin;
    this.vTheta = vThetaMin + vThetaMax * Math.random();
    this.outerStyle.perspective = '100px';
    this.rotx_base= 360 * (Math.random() - 0.5);
    this.roty_base= 360 * (Math.random() - 0.5);
    this.rotz_base= 360 * (Math.random() - 0.5);
    // TweenMax.set($(this.inner), {rotationX: rotx,rotationY: roty,rotationZ: rotz});

    // pos
    this.vxThetaMin = -.1;
    this.vxThetaMax = - this.vxThetaMin - this.vxThetaMin;
    this.vyMin = .13;
    this.vyMax = .18;
    this.vx = Math.sin(this.vxThetaMin + this.vxThetaMax * Math.random());
    this.vy = (this.vyMin + this.vyMax * Math.random()) * (1.0 + 0.2 * (4.0 - 5/10));
    this.deft = this.$target.offset().top;
    this.defl = this.$target.offset().left;
    TweenMax.set($(this.outer), {left: this.defl, top: this.deft});
    // 完全ランダム
    this.x_base = gb.r.w * (Math.random() - 0.5);
    this.y_base = gb.r.h * (Math.random() - 0.5);
    this.z_base = gb.r.h * (Math.random() - 0.5);
    // 左方向から
    this.x_base = gb.r.w * (Math.random() - 0.5 - 2.0);
    this.y_base = gb.r.h * (Math.random() - 0.5);
    this.z_base = gb.r.h * (Math.random() - 0.5);
    TweenMax.set($(this.outer), {x: this.x_base, y: this.y_base, z: this.z_base});

    // op
    TweenMax.set($(this.outer), {opacity: 0});

    this.rotateStrength = 1;
    this.posStrength = 1;


    // for sort
    this.posx = this.defl;


  }

  update() {

    // rotate
    var fr = gb.up.frame;
    var nx = v.noise1(this.basex + fr/100);
    var ny = v.noise1(this.basey + fr/100);
    var nz = v.noise1(this.basez + fr/100);

    var rotx_state = nx * Math.PI * 2 * 30;
    var roty_state = ny * Math.PI * 2 * 30;
    var rotz_state = nz * Math.PI * 2 * 30;

    var x = this.rotx_base + rotx_state * this.rotateStrength;
    var y = this.roty_base + roty_state * this.rotateStrength;
    var z = this.rotz_base + rotz_state * this.rotateStrength;

    TweenMax.set($(this.inner), {rotationX: x, rotationY: y, rotationZ: z});

    // pos
    var radius = 45 + v.noise1(fr / 200, this.offset) * 30;
    var x_state = Math.cos(this.offset + fr / 100) * radius;
    var y_state = Math.sin(this.offset + fr / 100) * radius;
    var z_state = 0;

    var x = this.x_base + x_state * this.posStrength;
    var y = this.y_base + y_state * this.posStrength;
    var z = this.z_base + z_state * this.posStrength;

    TweenMax.set($(this.outer), {x: x, y: y, z: z});

  }

  timeline(delay) {

    var tl = new TimelineMax({delay: delay});

    tl
      // pos
      .to(this, 3, {
        x_base: 0,
        y_base: 0,
        z_base: 0,
        // ease: Power4.easeInOut,
        ease: Back.easeOut.config(0.2)
      }, 0.0)
      // rotate
      .to(this, 3, {
        rotx_base: 0,
        roty_base: 0,
        rotz_base: 0,
        ease: Power4.easeInOut,
      }, 0.0)
      // op
      .to($(this.outer), 3, {
        opacity: 1,
        ease: Power2.easeInOut,
      }, 0.2)

      // strength
      .to(this, 3, {
        rotateStrength: 0,
        ease: Power3.easeInOut,
      }, 0.0 + Math.random() * 1.0)
      .to(this, 3, {
        posStrength: 0,
        ease: Power3.easeInOut,
      }, 0.0 + Math.random() * 1.0)



  }

  setEvents() {

    // super.setEvents();


  }

}