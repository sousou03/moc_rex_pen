//--------------------------------------------------
//
//  SVGLineHover
//
//--------------------------------------------------

export default class SVGLineHover {

  constructor($target) {

    this.$target = $target
    this.$svg = $target.find('svg');
    this.$circleWrap =  $('.glass_o');
    this.$circle = $target.find('circle');
    this.$line = $target.find('line');

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$circleWrap, {rotationZ: -310});
    TweenMax.set(this.$circle, {fill:'none', stroke: '#fff'});
    TweenMax.set(this.$line, {fill:'none', stroke: '#fff'});

  }

  onEnter (that) {

    var tl = new TimelineMax();

    TweenMax.killTweensOf(this.$circleWrap);
    TweenMax.killTweensOf(this.$circle);
    TweenMax.killTweensOf(this.$line);

    tl
      .set(this.$circleWrap, {rotationZ: -310}, 0.0)
      .set(this.$circle, {drawSVG: '0%'}, 0.0)
      .set(this.$line, {drawSVG: '0%'}, 0.0)

      .to(this.$circle, 1.0, {
        drawSVG: '100%', 
        ease:Expo.easeOut,
      }, 0.0)
      .to(this.$line, 0.3, {
        drawSVG: '100%', 
        ease:Power4.easeOut,
      }, 0.55)
    
  }

  onLeave (that) {


  }

  setEvents() {

    var self = this;

    this.$target.on('mouseenter', function(e) {self.onEnter.call(self,this)});
    this.$target.on('mouseleave', function(e) {self.onLeave.call(self,this)});

  }

}