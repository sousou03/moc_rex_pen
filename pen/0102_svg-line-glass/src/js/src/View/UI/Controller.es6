//--------------------------------------------------
//
//  Dom
//
//--------------------------------------------------

export default class Dom {

  constructor($target) {

    this.$target = $target
    this.$svg = $target.find('svg');
    this.$circleWrap =  $('.glass_o');
    this.$circle = $target.find('circle');
    this.$ellipse = $target.find('ellipse');
    this.$line = $target.find('line');

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$circleWrap, {rotationZ: -360});
    TweenMax.set(this.$circle, {fill:'none', stroke: '#fff'});
    TweenMax.set(this.$ellipse, {fill:'none', stroke: '#fff'});
    TweenMax.set(this.$line, {fill:'none', stroke: '#fff'});

  }

  onEnter (that) {

    var tl = new TimelineMax();

    tl
      .set(this.$circleWrap, {rotationZ: -360}, 0.0)
      .set(this.$circle, {drawSVG: '0%'}, 0.0)
      // .set(this.$ellipse, {drawSVG: '0%'}, 0.0)
      .set(this.$line, {drawSVG: '0%'}, 0.0)
      // .to(this.$ellipse, 1.0, {
      .to(this.$circleWrap, 0.7, {
        rotationZ: 0,
        ease:Expo.easeOut,
      }, 0.0)
      .to(this.$circle, 1.3, {
        drawSVG: '100%', 
        ease:Expo.easeOut,
      }, 0.0)
      .to(this.$line, 0.3, {
        drawSVG: '100%', 
        ease:Power4.easeOut,
      }, 0.6)
    
  }

  onLeave (that) {

    // var tl = new TimelineMax();

    // tl
    //   .to(this.$ellipse, 1.0, {
    //     drawSVG: '100%', 
    //     ease:Power4.easeOut,
    //   }, 0.0)
    //   .to(this.$line, 1.0, {
    //     drawSVG: '100%', 
    //     ease:Power4.easeOut,
    //   }, 0.2)

  }

  setEvents() {

    var self = this;

    // this.$target.on(gb.u.dv.eEnter, function(e) {self.onEnter.call(self,this)});
    // this.$target.on(gb.u.dv.eLeave, function(e) {self.onLeave.call(self,this)});
    this.$target.on('mouseenter', function(e) {self.onEnter.call(self,this)});
    this.$target.on('mouseleave', function(e) {self.onLeave.call(self,this)});

  }

}