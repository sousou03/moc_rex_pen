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


    // Create the periodic spline 定期的なspline曲線
    // setting
    this.eccentricity = 10;
    this.radius = 1/this.eccentricity
    this.radius2 = this.radius+this.radius;

    this.splineX = this.createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length-1; i < l; ++i) this.splineY[i] = this.deviation * Math.random();
    this.splineY[0] = this.splineY[l] = this.deviation * Math.random();

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
    this.vx = Math.sin(this.vxThetaMin + this.vxThetaMax * Math.random());
    this.vy = (this.vyMin + this.vyMax * Math.random()) * (1.0 + 0.2 * (4.0 - 5/10));
    this.deft = this.$target.offset().top;
    this.defl = this.$target.offset().left;
    this.x = 0;
    this.y = 0;
    TweenMax.set($(this.outer), {left: this.defl, top: this.deft});


  }

  update( delta) {

    this.frame += delta;
    this.x += this.vx * delta;
    this.y += this.vy * delta;
    this.theta += this.vTheta * delta / 10 * 7;

    // Compute spline and convert to polar
    var phi = this.frame % 7777 / 7777, i = 0, j = 1;
    while (phi >= this.splineX[j]) i = j++;
    var rho = this.interpolation(
      this.splineY[i],
      this.splineY[j],
      (phi-this.splineX[i]) / (this.splineX[j]-this.splineX[i])
    );
    phi *= Math.PI * 2;

    // pos
    var x = this.x + Math.cos(phi) * rho;
    var y = this.y + Math.sin(phi) * rho;
      // var x = Math.cos(phi) * rho;
      // var y = Math.sin(phi) * rho;

    // draw
    TweenMax.set($(this.outer), {x: x, y: y, z: 0});

    // rotate
    this.innerStyle.transform = this.axis + this.theta + 'deg)';

    // reset
    if (this.y > gb.r.h+this.deviation) this.y = 0 - this.deviation * 3 - this.deft

  }

  // Cosine interpolation
  interpolation(a, b, t) {
    return (1-Math.cos(Math.PI*t))/2 * (b-a) + a;
  }

  createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [this.radius, 1-this.radius], measure = 1-this.radius2, spline = [0, 1];
    while (measure) {
      var dart = measure * Math.random(), i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i+1], interval = b-a;
        if (dart < measure+interval) {
          spline.push(dart += a-measure);
          break;
        }
        measure += interval;
      }
      c = dart-this.radius, d = dart+this.radius;

      // Update the domain
      for (i = domain.length-1; i > 0; i -= 2) {
        l = i-1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      // Re-measure the domain
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i+1]-domain[i];
    }

    return spline.sort();
  }

  setEvents() {

    // super.setEvents();


  }

}