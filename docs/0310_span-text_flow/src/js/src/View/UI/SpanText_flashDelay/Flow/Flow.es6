// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// cf
// https://codepen.io/Pillowfication/pen/PNEJbY

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

    // create close
    this.createClone();


    // pos ready
    var x = gb.r.w * (Math.random() - 0.5);
    var y = gb.r.h * (Math.random() - 0.5);
    TweenMax.set($(this.outer), {x: x, y: y, z: 0});

    // op
    TweenMax.set($(this.outer), {opacity: 0});

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
    var rotx = 360 * (Math.random() - 0.5);
    var roty = 360 * (Math.random() - 0.5);
    var rotz = 360 * (Math.random() - 0.5);
    TweenMax.set($(this.inner), {rotationX: rotx,rotationY: roty,rotationZ: rotz});

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
    this.x = 0;
    this.y = 0;


  }

  update() {


  }

  timeline(delay) {

    var tl = new TimelineMax({delay: delay});

    tl
      // pos
      .to($(this.outer), 1.2, {
        x: 0,
        y: 0,
        z: 0,
        ease: Expo.easeInOut,
      }, 0.0)
      // rotate
      .to($(this.inner), 1.2, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        ease: Expo.easeInOut,
      }, 0.0)
      // op
      .to($(this.outer), 1.2, {
        opacity: 1,
        ease: Expo.easeInOut,
      }, 0.0)



  }

  setEvents() {

    // super.setEvents();


  }

}