// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// cf
// https://codepen.io/Pillowfication/pen/PNEJbY

export default class Dom {

  constructor(theme) {

    this.deviation = 100;
    // this.sizeMin = 8;
    // this.sizeMax = 40 - this.sizeMin;

    this.size = [
      12,
      16,
      22,
      32,
    ]

    this.eccentricity = 10;
    this.radius = 1/this.eccentricity
    this.radius2 = this.radius+this.radius;

    this.dxThetaMin = -.1;
    this.dxThetaMax = -this.dxThetaMin - this.dxThetaMin;
    this.dyMin = .13;
    this.dyMax = .18;
    this.dThetaMin = .4;
    this.dThetaMax = .7 - this.dThetaMin;

    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    this.outerStyle = this.outer.style
    this.innerStyle = this.inner.style;
    this.outerStyle.position = 'absolute';
    // this.outerStyle.width  = (this.sizeMin + this.sizeMax * Math.random()) + 'px';
    // this.outerStyle.height = (this.sizeMin + this.sizeMax * Math.random()) + 'px';
    this.size = this.size[Math.floor(this.size.length*Math.random())];
    this.outerStyle.width  = (this.size + 'px');
    this.outerStyle.height = (this.size + 'px');
    this.innerStyle.width  = '100%';
    this.innerStyle.height = '100%';
    this.innerStyle.backgroundColor = theme();

    this.outerStyle.perspective = '100px';
    this.outerStyle.transform = 'rotate(' + (360 * Math.random()) + 'deg)';
    this.axis = 'rotate3D(' +
      Math.cos(360 * Math.random()) + ',' +
      Math.cos(360 * Math.random()) + ',0,';
    this.theta = 360 * Math.random();
    this.dTheta = this.dThetaMin + this.dThetaMax * Math.random();
    this.innerStyle.transform = this.axis + this.theta + 'deg)';

    // this.x = gb.r.w * Math.random();
    // this.y = -this.deviation;
    this.x = gb.r.w / 2;
    this.y = gb.r.h / 2 +  gb.r.h / 2;
    this.dx = Math.sin(this.dxThetaMin + this.dxThetaMax * Math.random());
    this.dy = (this.dyMin + this.dyMax * Math.random()) * (1.0 + 0.2 * (4.0 - this.size/10));
    this.outerStyle.left = this.x + 'px';
    this.outerStyle.top  = this.y + 'px';

    // Create the periodic spline
    this.splineX = this.createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length-1; i < l; ++i)
      this.splineY[i] = this.deviation * Math.random();
    this.splineY[0] = this.splineY[l] = this.deviation * Math.random();


    var raidus = gb.u.m.map(100 * Math.random(), 30, 80, 0, 100);
    // var raidus = 50;
    var min = Math.PI / 10 * 2.7;
    var max = Math.PI - min;
    var rad = gb.u.m.map(Math.PI * Math.random(), min, max, 0, Math.PI);
    this.vx = - Math.cos(rad) * raidus;
    this.vy = - Math.sin(rad) * raidus;
    this.friction = 0.95 + (Math.random() - 0.5) * 2 * 0.03;


    // this.setup();
    this.setEvents();

  }

  setup() {

    this.x = gb.r.w * Math.random();
    this.y = -this.deviation;
    this.dx = Math.sin(this.dxThetaMin + this.dxThetaMax * Math.random());
    this.dy = (this.dyMin + this.dyMax * Math.random()) * (1.0 + 0.2 * (4.0 - this.size/10));
    this.outerStyle.left = this.x + 'px';
    this.outerStyle.top  = this.y + 'px';

  }

  update(height, delta) {

    this.frame += delta;
    this.x += this.dx * delta;
    this.y += this.dy * delta;
    this.theta += this.dTheta * delta / 10 * 7;

    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;

    // Compute spline and convert to polar
    var phi = this.frame % 7777 / 7777, i = 0, j = 1;

    while (phi >= this.splineX[j]) i = j++
      ;
    var rho = this.interpolation(
      this.splineY[i],
      this.splineY[j],
      (phi-this.splineX[i]) / (this.splineX[j]-this.splineX[i])
    );
    phi *= Math.PI * 2;

    this.outerStyle.left = this.x + rho * Math.cos(phi) + 'px';
    this.outerStyle.top  = this.y + rho * Math.sin(phi) + 'px';
    this.innerStyle.transform = this.axis + this.theta + 'deg)';


    return this.y > height+this.deviation;

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



