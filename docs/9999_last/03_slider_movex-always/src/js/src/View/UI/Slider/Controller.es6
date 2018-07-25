//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from './Base.es6';
import Swipe from './Swipe.es6';
import MouseDrag from './MouseDrag.es6';

export default class Controller extends Base {

  constructor($target) {

    super();

    this.isUEv = true;
    this.isREv = true;
    this.isUpdate = true;

    this.$wrap = $('.slider');
    this.$inner = this.$wrap.find('.sliderInner');
    this.$item = this.$inner.find('.item');

    this.$arrow = $('.arrow');

    this.isLock = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    var padding = 50;
    var margin = 5;
    var marginLeft = parseInt(this.$inner.css('margin-left'));
    this.w = this.$item.width();
    var len = this.$item.length;

    this.wrapw = gb.r.w - 50;
    if (gb.r.w<500) {
      this.wrapw = gb.r.w;
      padding = 0;
      margin = 0;
    }
    this.innerw = this.w * len + margin * (len - 1)
    this.dis = this.innerw - this.wrapw + padding + marginLeft;

    log(marginLeft)

    this.x = 0;
    this.tarx = 0;

    this.isToRight = true;
    this.isStop = false;
    this.cnt = 0;
    this.isLock = false;
    this.isDrag = false;

    // swipe
    if (gb.u.dv.isSP) this.s = new Swipe($(window));
    else this.s = new MouseDrag($(window));


    // swipe event
    this.s.onStart = ()=>{

      this.isDrag = true;

    }
    this.s.onMove = (sign, val)=>{

      if (!this.isDrag) return;
      if (val<10||this.isLock) return;
      this.isLock = true;
      if (sign>0) {
        this.next();
      } else {
        this.prev();
      }

    }
    this.s.onEnd = ()=>{

      this.isDrag = false;

    }
    this.s.onSwipe = (sign)=>{


    }


  }

  update() {


    // max
    // min
    if (this.tarx < - this.dis) {
      this.tarx = - this.dis;
    }
    if (this.tarx > 0) {
      this.tarx = 0;
    }

    
    if ((this.tarx!==0&&this.tarx!==-this.dis)&&this.isLock) {
      this.isLock = false;
      this.$arrow.find('.inner').removeClass('edge');
    }    
    if (this.tarx==0&&!this.isLock) {
      this.$arrow.eq(0).find('.inner').addClass('edge');
      this.isLock = true;
    }
    if (this.tarx==-this.dis&&!this.isLock) {
      this.$arrow.eq(1).find('.inner').addClass('edge');
      this.isLock = true;
    }

    this.x += (this.tarx - this.x) * 0.12;

    TweenMax.set(this.$inner, {x: this.x});

  }

  show() {

    this.$arrow.addClass('active');

    // 横スライドstop
    this.isStop = true;

  }

  hide() {

    this.$arrow.removeClass('active');

    // 横スライドplay
    this.isStop = false;

  }  　

  next() {

    TweenMax
      .to(this, 0.4, {
        tarx: '+=' + - this.w,
        ease: Expo.easeOut,
        onComplete: ()=>{
          this.isLock = false;
        }
      })

  }

  prev() {

    TweenMax
      .to(this, 0.4, {
        tarx: '+=' + this.w,
        ease: Expo.easeOut,
        onComplete: ()=>{
          this.isLock = false;
        }
      })

  }  　

  onResize() {

    var padding = 50;
    var margin = 5;
    var marginLeft = parseInt(this.$inner.css('margin-left'));
    this.w = this.$item.width();
    var len = this.$item.length;

    this.wrapw = gb.r.w - 50;
    this.innerw = this.w * len + margin * (len - 1)
    this.dis = this.innerw - this.wrapw + padding + marginLeft;

    if (gb.r.w=500) this.tarx = 0;

  }

  setEvents() {

    var self = this;

    super.setEvents();

    this.$wrap.on('mouseenter', this.show.bind(this));
    this.$wrap.on('mouseleave', this.hide.bind(this));
    this.$arrow.eq(0).on('click', this.prev.bind(this));
    this.$arrow.eq(1).on('click', this.next.bind(this));

  }

}
