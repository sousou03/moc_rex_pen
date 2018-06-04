//--------------------------------------------------
//
//  Dom
//
//--------------------------------------------------

export default class Dom {

  constructor($target) {

    this.$target = $target
    this.$svg = $target.find('svg');
    this.$path = $target.find('path');

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$path, {drawSVG:0, fill:'none',stroke:'#000'});

  }

  onEnter (that) {

    TweenMax.to(this.$path, 3.0, {
      drawSVG: '100%', 
      ease:Power4.easeOut,
    })
    
  }

  onLeave (that) {

    TweenMax.to(this.$path, 3.0, {
      drawSVG: '0%', 
      ease:Power4.easeOut,
    })

  }

  setEvents() {

    var self = this;

    // this.$target.on(gb.u.dv.eEnter, function(e) {self.onEnter.call(self,this)});
    // this.$target.on(gb.u.dv.eLeave, function(e) {self.onLeave.call(self,this)});
    this.$target.on('mouseenter', function(e) {self.onEnter.call(self,this)});
    this.$target.on('mouseleave', function(e) {self.onLeave.call(self,this)});

  }

}