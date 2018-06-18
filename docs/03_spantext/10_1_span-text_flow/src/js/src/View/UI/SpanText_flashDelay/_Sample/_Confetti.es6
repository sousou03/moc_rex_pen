// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// cf
// https://codepen.io/Pillowfication/pen/PNEJbY

export default class Dom {

  constructor($wrap, index, arr, len) {

    this.$wrap = $wrap;
    this.index = index;

    this.deviation = 100;
    // this.sizeMin = 8;
    // this.sizeMax = 40 - this.sizeMin;

    // this.isRocket = false;
    this.isRocket = true;

    this.size = [
      12,
      16,
      22,
      32,
    ]
    this.valx = 0;
    this.valy = 0;
    this.valtheta = 0;
    this.valaxis = 0;

    this.eccentricity = 10;
    this.radius = 1/this.eccentricity
    this.radius2 = this.radius+this.radius;

    this.dxThetaMin = -.1;
    this.dxThetaMax = -this.dxThetaMin - this.dxThetaMin;
    this.dyMin = .1;
    this.dyMax = .15;
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
    var $clone = $wrap.find('svg').eq(index+1).clone();
    var w = $wrap.find('svg').eq(index+1).width();
    var h = $wrap.find('svg').eq(index+1).height();
    this.deft = $wrap.find('svg').eq(index+1).offset().top;
    this.defl = $wrap.find('svg').eq(index+1).offset().left;
    $clone.css({width: w, height: h});
    $(this.inner).append($clone);
    $(this.inner).css({'margin-left': -w/2,'margin-top': -h/2});
    // this.outerStyle.width  = (this.size + 'px');
    // this.outerStyle.height = (this.size + 'px');
    // this.innerStyle.width  = '100%';
    // this.innerStyle.height = '100%';
    // this.innerStyle.backgroundColor = theme();

    this.outerStyle.perspective = '300px';
    this.outerStyle.transform = 'rotate(' + (360 * Math.random()) + 'deg)';
    this.axisx = Math.cos(360 * Math.random());
    this.axisy = Math.cos(360 * Math.random());
    this.axis = 'rotate3D(' +this.axisx + ',' +this.axisy+ ',0,';
    this.theta = 360 * Math.random();
    this.dTheta = this.dThetaMin + this.dThetaMax * Math.random();
    this.innerStyle.transform = this.axis + this.theta + 'deg)';

    if (this.isRocket) {
      this.x = gb.r.w / 2;
      this.y = gb.r.h / 2 +  gb.r.h / 4 * 3;
    } else {
      this.x = gb.r.w * Math.random();
      this.y = -this.deviation;      
    }
    
    this.dx = Math.sin(this.dxThetaMin + this.dxThetaMax * Math.random());
    this.dy = this.dyMin + this.dyMax * Math.random();
    this.outerStyle.left = this.x + 'px';
    this.outerStyle.top  = this.y + 'px';

    // Create the periodic spline
    this.splineX = this.createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length-1; i < l; ++i)
      this.splineY[i] = this.deviation * Math.random();
    this.splineY[0] = this.splineY[l] = this.deviation * Math.random();


    var scale = 1.0;
    var radius = gb.u.m.map(100 * Math.random(), 75*scale, 75*scale, 0, 100);
    // var radius = 50;
    var min = Math.PI / 100 * 45;
    var max = Math.PI - min;
    var spread = arr[index]/(len-1);

    var mag = 0.5 - Math.abs(0.5 - spread);
    mag *= 1.0*scale;
    radius = radius + radius * mag * 0.3;


    var rad = gb.u.m.map(Math.PI * spread, min, max, 0, Math.PI);
    this.vx = - Math.cos(rad) * radius;
    this.vy = - Math.sin(rad) * radius;
    this.friction = 0.93 + (Math.random() - 0.5) * 2 * 0.005;
    // this.friction = 0.93;


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

    if (this.isRocket) {
      this.vx *= this.friction; 
      this.vy *= this.friction;
      this.x += this.vx;
      this.y += this.vy;
    }

    // log(this.dy * delta);

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
    phi -= Math.PI / 2;

    // var updatex = this.x + rho * Math.cos(phi);
    // var updatey = this.y + rho * Math.sin(phi);
    var updatex = this.x;
    // var updatey = this.y;
    var updatey = this.y + rho * Math.sin(phi);
    var updateTheta = this.theta;
    var updateAxisx = this.axisx;
    var updateAxisy = this.axisy;
    // var updatex = this.x + rho * Math.cos(phi);
    var defx = this.defl;
    var defy = this.deft;
    var defTheta = 0;
    var defaxis = 0;

    var x = gb.u.m.lerp(updatex, defx, this.valx);
    var y = gb.u.m.lerp(updatey, defy, this.valy);
    var theta = gb.u.m.lerp(updateTheta, defTheta, this.valtheta);
    var axisx = gb.u.m.lerp(updateAxisx, defaxis, this.valaxis);
    var axisy = gb.u.m.lerp(updateAxisy, defaxis, this.valaxis);

    // this.outerStyle.left = this.x + rho * Math.cos(phi) + 'px';
    // this.outerStyle.top  = this.y + rho * Math.sin(phi) + 'px';
    // this.innerStyle.transform = this.axis + this.theta + 'deg)';
    this.outerStyle.left = x + 'px';
    this.outerStyle.top  = y + 'px';
    this.axis = 'rotate3D(' +axisx + ',' +axisy+ ',0,';
    this.innerStyle.transform = this.axis + theta + 'deg)';

    // return y > height+this.deviation;

  }

  tweenDef(delay, parent, isLast) {

    TweenMax.to(this, 1.5, {
      valx: 1,
      valy: 1,
      valtheta: 1,
      valaxis: 1,
      delay: delay,
      ease: Power2.easeInOut,
      onComplete: ()=>{

        if (isLast) {
          parent.offU();
        }

        this.x = this.defl;
        this.y = this.deft;
        this.dy = (Math.random() - 0.5) * 2 * 0.1;
        this.theta = 0;

      }
    })
    TweenMax.to($(this.outer), 1.5, {
      rotationZ: 0,
      delay: delay,
      ease: Power2.easeInOut,
    })
    TweenMax.to($(this.inner), 1.5, {
      'margin-left': 0,
      'margin-top': 0,
      delay: delay,
      ease: Power2.easeInOut,
    })

  }

  hideFlow(delay, parent, isLast) {

    this.vx = -30 + (Math.random() - 0.5) * 2 * 5;

    TweenMax.to(this, 0.9, {
      valx: 0,
      valy: 0,
      valtheta: 0,
      valaxis: 0,
      delay: delay,
      ease: Power2.easeInOut,
      onComplete: ()=>{
        if (isLast) parent.offU();
      }
    })
    TweenMax.to($(this.outer), 0.6, {
      opacity: 0,
      delay: delay,
      ease: Power2.easeInOut,
    })

  }

  showFlow(delay, parent, isLast) {

    // this.vx = -30 + (Math.random() - 0.5) * 2 * 5;

    TweenMax.to(this, 1.2, {
      valx: 1,
      valy: 1,
      valtheta: 1,
      valaxis: 1,
      delay: delay,
      ease: Power2.easeInOut,
      onComplete: ()=>{
        
        if (isLast) parent.offU();

        this.x = this.defl;
        this.y = this.deft;
        this.dy = (Math.random() - 0.5) * 2 * 0.1;
        this.theta = 0;

      }
    })
    TweenMax.to($(this.outer), 1.2, {
      opacity: 1,
      delay: delay,
      ease: Power2.easeInOut,
    })

  }

  showFlowNone(delay, parent, isLast) {

    // this.vx = -30 + (Math.random() - 0.5) * 2 * 5;

    TweenMax.set(this, {
      valx: 1,
      valy: 1,
      valtheta: 1,
      valaxis: 1,
      delay: delay,
    })
    TweenMax.to($(this.outer), 1.2, {
      opacity: 1,
      delay: delay,
      ease: Power2.easeInOut,
    })

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

  onResize() {

    var w = this.$wrap.find('svg').eq(this.index+1).width();
    var h = this.$wrap.find('svg').eq(this.index+1).height();
    this.deft = this.$wrap.find('svg').eq(this.index+1).offset().top;
    this.defl = this.$wrap.find('svg').eq(this.index+1).offset().left;
    // $(this.inner).css({'margin-left': -w/2,'margin-top': -h/2});

    this.update(0,0);

  }

  setEvents() {

    // super.setEvents();


  }

}