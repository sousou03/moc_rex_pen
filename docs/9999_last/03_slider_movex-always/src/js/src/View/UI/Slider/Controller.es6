//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from './Base.es6';
import Swipe from './Swipe.es6';
import MouseDrag from './MouseDrag.es6';

export default class Controller extends Base {

  constructor($wrap) {

    super();

    this.isUEv = true;
    this.isREv = true;
    this.isUpdate = true;

    this.$wrap = $wrap;
    this.$inner = this.$wrap.find('.sliderInner');
    this.$item = this.$inner.find('.item');

    this.$arrow = this.$wrap.find('.arrow');

    this.isLock = false;
    this.isLock2 = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    var padding = 50;
    var margin = 5;
    var marginLeft = parseInt(this.$inner.css('margin-left'));
    this.w = this.$item.width();
    var len = this.$item.length;

    this.wrapw = window.innerWidth - 50;
    if (window.innerWidth<500) {
      this.wrapw = window.innerWidth;
      padding = 0;
      margin = 0;
    }
    this.innerw = this.w * len + margin * (len - 1)
    this.dis = this.innerw - this.wrapw + padding + marginLeft;

    this.x = 0;
    this.tarx = 0;

    this.isToRight = true;
    this.isStop = false;
    this.cnt = 0;
    this.isLock = false;
    this.isDrag = false;

    // swipe
    if (this.isDeviceSP()) this.s = new Swipe(this.$wrap);
    else this.s = new MouseDrag(this.$wrap);


    // swipe event
    this.s.onStart = ()=>{

      this.isDrag = true;

    }
    this.s.onMove = (sign, val)=>{


      if (!this.isDrag) return;
      if (val<30||this.isLock) return;
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


    if ((this.tarx!==0&&this.tarx!==-this.dis)&&this.isLock2) {
      this.isLock2 = false;
      this.$arrow.removeClass('edge');
    }
    if (this.tarx==0&&!this.isLock2) {
      this.$arrow.eq(0).addClass('edge');
      this.isLock2 = true;
    }
    if (this.tarx==-this.dis&&!this.isLock2) {
      this.$arrow.eq(1).addClass('edge');
      this.isLock2 = true;
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

    this.wrapw = window.innerWidth - 50;
    if (window.innerWidth<=500&&!this.isDeviceSP()) {
      this.wrapw = window.innerWidth;
      padding = 0;
      margin = 0;
    }
    this.innerw = this.w * len + margin * (len - 1)
    this.dis = this.innerw - this.wrapw + padding + marginLeft;

    if (window.innerWidth<=500&&!this.isDeviceSP()) this.tarx = 0;

  }

  isDeviceSP(){

    var media = ["iphone","ipod","ipad","android","dream","cupcake","blackberry9500","blackberry9530","blackberry9520","blackberry9550","blackberry9800","webos","incognito","webmate"];
    var pattern = new RegExp(media.join("|"),"i");

    var ua = window.navigator.userAgent.toLowerCase(); //useragent
    var b = pattern.test(ua);

    return b;

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
