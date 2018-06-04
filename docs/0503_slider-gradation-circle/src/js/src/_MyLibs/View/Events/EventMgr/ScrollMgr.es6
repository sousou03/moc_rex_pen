//--------------------------------------------------
//
//  ScrollMgr
//
//--------------------------------------------------

export default class ScrollMgr {

  constructor() {

    this.st = 0; // 現在のscroll top
    this.sb = 0; // 現在のscroll bottom

    this.isUp = null; // 上スクロールか下スクロールか;
    this.dis = 0;
    this.deltaY = 0;
    this.offset = 0;

    this.isSetWheel = true;

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  onScroll() {

    this.st = $(window).scrollTop();
    this.sb = this.st + gb.r.h;

  }

  onWheel(e,delta,deltaX,deltaY) {

    this.isWheel = true;

    if (deltaY>0) this.isUp = true;
    else this.isUp = false;

    this.dis = deltaY - this.deltaY;
    this.offset += deltaY;
    this.deltaY = deltaY;

  }

  setEvents() {

    // scroll
    $(window).on('scroll', ()=>{this.onScroll();});
    // $(window).on('scroll', $.throttle(100, false, this.onScroll.bind(this)));

    // wheel
    if (this.isSetWheel) $(document).on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onWheel(e,delta,deltaX,deltaY);}); // → document指定だと、trackball controlsが上手く動かない
    // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onWheel(e,delta,deltaX,deltaY);});

  }

}