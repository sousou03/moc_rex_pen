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
    this.outerStyle.perspective = '50px';
    // this.outerStyle.transform = 'rotate(' + (360 * Math.random()) + 'deg)';
    // this.innerStyle.transform = this.axis + this.theta + 'deg)';

    this.offset = Math.random() * Math.PI * 2;

    // pos
    this.vxThetaMin = -.1;
    this.vxThetaMax = - this.vxThetaMin - this.vxThetaMin;
    this.vyMin = .13;
    this.vyMax = .18;
    this.x = 0;
    this.y = 0;
    this.vx = Math.sin(this.vxThetaMin + this.vxThetaMax * Math.random());
    this.vy = (this.vyMin + this.vyMax * Math.random()) * (1.0 + 0.2 * (4.0 - 5/10));
    this.deft = this.$target.offset().top;
    this.defl = this.$target.offset().left;
    TweenMax.set($(this.outer), {left: this.defl, top: this.deft});


  }

  update( delta) {

    this.frame += delta;
    this.x += this.vx * delta;
    this.y += this.vy * delta;
    this.theta += this.vTheta * delta / 10 * 7;

    // noise
    var radius = 75 + this.noise(gb.up.frame / 100, this.offset) * 50;

    // // pos
    var x = this.x + Math.cos(this.offset + gb.up.frame / 100) * radius;
    var y = this.y + Math.sin(this.offset + gb.up.frame / 100) * radius;
    // var x = Math.cos(this.offset + gb.up.frame / 100) * radius;
    // var y = Math.sin(this.offset + gb.up.frame / 100) * radius;

    // draw
    TweenMax.set($(this.outer), {x: x, y: y, z: 0});

    // rotate
    this.innerStyle.transform = this.axis + this.theta + 'deg)';

    // reset
    if (this.y > gb.r.h+this.deviation) this.y = 0 - this.deviation * 3 - this.deft

  }

  noise(t, p=0.01) {

    return noise.simplex2(p, t);

  }

  setEvents() {

    // super.setEvents();


  }

}