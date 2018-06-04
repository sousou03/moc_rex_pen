//--------------------------------------------------
//
//  LineBox
//
//--------------------------------------------------

export default class LineBox {

  constructor($target){

    this.$target = $target;
    this.$lineBox = '<div class="lineBox">' +
                      '<div class="lineBoxLine lineT"></div>' +
                      '<div class="lineBoxLine lineR"></div>' +
                      '<div class="lineBoxLine lineB"></div>' +
                      '<div class="lineBoxLine lineL"></div>' +
                    '</div>';

    this.$wrap = null;
    this.$lt = null;
    this.$lr = null;
    this.$lb = null;
    this.$ll = null;

    this.t=0;this.r=0;this.l=0;this.b=0;
    this.w=0;this.h=0;

    // color
    this.color = '#000'
    this.lineWidth = 1;

    this.setup();
    this.setEvents();
    // this.run();

  }

  setup() {

    this.$target.prepend(this.$lineBox);

    this.$wrap = this.$target.find('.lineBox');
    this.$lt = this.$target.find('.lineT');
    this.$lr = this.$target.find('.lineR');
    this.$lb = this.$target.find('.lineB');
    this.$ll = this.$target.find('.lineL');

    // set style
    TweenMax.set($('.lineBoxLine'), {backgroundColor: this.color,'position': 'absolute'});
    TweenMax.set(this.$wrap, {width: '100%',height: '100%','position': 'absolute',left:0,top:0});

    this.ready();
  
  }

  ready() {

    this.w = this.$target.width();
    this.h = this.$target.height();

    // 初期 0
    TweenMax.set(this.$lt, {width: 0,height: this.lineWidth,left: 0,top: 0});
    TweenMax.set(this.$lr, {width: this.lineWidth,height: 0,left: this.w-this.lineWidth,top: 0});
    TweenMax.set(this.$lb, {width: 0,height: this.lineWidth,left: this.w,top: this.h-this.lineWidth});
    TweenMax.set(this.$ll, {width: this.lineWidth,height: 0,left: 0,top: this.h});

    // 初期 100%
    // TweenMax.set(this.$lt, {width: '100%',height: this.lineWidth,left: 0,top: 0});
    // TweenMax.set(this.$lr, {width: this.lineWidth,height: '100%',left: this.w-this.lineWidth,top: 0});
    // TweenMax.set(this.$lb, {width: '100%',height: this.lineWidth,left: 0,top: this.h-this.lineWidth});
    // TweenMax.set(this.$ll, {width: this.lineWidth,height: '100%',left: 0,top: 0});

  }

  show() {

    var tl = new TimelineMax();

    tl
      .to(this.$lt, 0.5, {
          width: '100%',
          ease : Power4.easeOut,
      }, 0.0)
      .to(this.$lr, 0.5, {
          height: '100%',
          ease : Power4.easeOut,
      }, 0.0)
      .to(this.$lb, 0.5, {
          width: '100%',
          left: 0,
          ease : Power4.easeOut,
      }, 0.0)
      .to(this.$ll, 0.5, {
          height: '100%',
          top: 0,
          ease : Power4.easeOut,
      }, 0.0)

  }

  hide() {

    var tl = new TimelineMax();

    tl
      .to(this.$lt, 0.5, {
          // width: '0',
          x: '105%',
          ease : Power4.easeOut,
      }, 0.0)
      .to(this.$lr, 0.5, {
          y: '105%',
          ease : Power4.easeOut,
      }, 0.0)
      .to(this.$lb, 0.5, {
          x: '-205%',
          left: this.w,
          ease : Power4.easeOut,
      }, 0.0)
      .to(this.$ll, 0.5, {
          y: '-205%',
          top: this.h,
          ease : Power4.easeOut,
      }, 0.0)

  }

  onResize() {

    this.w = this.$target.width();
    this.h = this.$target.height();

    TweenMax.set(this.$lt, {width: '100%',height: this.lineWidth,left: 0,top: 0});
    TweenMax.set(this.$lr, {width: this.lineWidth,height: '100%',left: this.w-this.lineWidth,top: 0});
    TweenMax.set(this.$lb, {width: '100%',height: this.lineWidth,left: 0,top: this.h-this.lineWidth});
    TweenMax.set(this.$ll, {width: this.lineWidth,height: '100%',left: 0,top: 0});

  }

  setEvents() {

    
  }

}