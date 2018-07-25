//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from './Util/Base.es6';
import * as m from './Util/Math/index.es6';

import SliderImg from './SliderImg/Controller.es6';
import SpanText from './SpanText/Controller.es6';

import Swipe from './Swipe.es6';
import MouseDrag from './MouseDrag.es6';

export default class Controller extends Base {

  constructor($wrap, index) {

    super();

    this.$wrap = $wrap;
    this.index = index;

    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    // slider
    this.s = new SliderImg(this.$wrap, 'cv'+this.index);
    this.slider = this.s.slider;

    this.sts = [];
    var $target = this.$wrap.find('.sliderContents');

    for (var i = 0; i < $target.length; i++) {
      var $sc = $target.eq(i);
      var st = new SpanText($sc.find('.text'), $sc.find('.subtext .inner'), $sc.find('.tag .inner'), $sc.find('.more .inner'));
      this.sts.push(st);
    }

    // indicator   
    this.$indicator = this.$wrap.find('.indicator');
    var html = '';
    for (var i = 0; i < $target.length; i++) {
      html += '<div class="item"></div>';
    }
    this.$indicator.append(html);
    this.$item = this.$indicator.find('.item');
    this.$item.eq(0).addClass('active');

    // variable
    this.index = 0;

    this.timeline();

  }

  update() {

  }

  timeline() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax({repeat: -1, delay: 3.0, repeatDelay: 3.0});

    this.tl
      // show
      .add(()=>{

        this.next();
        
      }, 0.0)
      .add(()=>{

        this.isTimeline = false;

      }, 0.1)

  }

  next(isItem=false, index) {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .add(()=>{

        // text
        this.sts[this.index].hide_op('next');

        // index
        if (!isItem) {
          var prevIndex = this.index - 1;
          if (prevIndex<0) prevIndex = this.sts.length - 1;
          this.sts[prevIndex].cancel();
          this.sts[this.index].cancel();
          this.index++;
        } else {
          var prevIndex = this.index - 1;
          if (prevIndex<0) prevIndex = this.sts.length - 1;
          this.sts[prevIndex].cancel();
          this.sts[this.index].cancel();  
          this.index = index;
        }
        this.index = this.index % this.sts.length;      

        // indicator
        this.$item.removeClass('active')
        this.$item.eq(this.index).addClass('active');
        

      }, 0.0)
      .add(()=>{
            
        // text
        this.sts[this.index].show_op('next');
          // img
        this.slider.next_op(isItem, this.index);

      }, 0.1)
      .add(()=>{
            
        this.isTimeline = false;
        this.timeline();

      }, 0.3)
    
  }

  prev(isItem=false, index) {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .add(()=>{

        // text
        this.sts[this.index].hide_op('prev');

        // index
        if (!isItem) {
          var prevIndex = this.index - 1;
          if (prevIndex<0) prevIndex = this.sts.length - 1;
          this.sts[prevIndex].cancel();
          this.sts[this.index].cancel();
          this.index--;
        } else {
          var prevIndex = this.index - 1;
          if (prevIndex<0) prevIndex = this.sts.length - 1;
          this.sts[prevIndex].cancel();
          this.sts[this.index].cancel();
          this.index = index;
        }
        if (this.index<0) this.index = this.sts.length - 1;

        // indicator
        this.$item.removeClass('active')
        this.$item.eq(this.index).addClass('active');


      }, 0.0)
      .add(()=>{
          
        // text
        this.sts[this.index].show_op('prev');
          // img
        this.slider.prev_op(isItem, this.index);

      }, 0.1)
      .add(()=>{
          
        this.isTimeline = false;
        this.timeline();

      }, 0.3)

  }

  onResize() {


  }

  onItem(that) {

    var index = this.$item.index(that);

    if (index>this.index) {
      this.next(true, index);
    }
    if (index<this.index) {
      this.prev(true, index);
    }

  }

  isDeviceSP(){

    var media = ["iphone","ipod","ipad","android","dream","cupcake","blackberry9500","blackberry9530","blackberry9520","blackberry9550","blackberry9800","webos","incognito","webmate"];
    var pattern = new RegExp(media.join("|"),"i");

    var ua = window.navigator.userAgent.toLowerCase(); //useragent
    var b = pattern.test(ua);

    return b;

  }

  setEvents() {

    super.setEvents();

    var self = this;

    this.$item.on('click', function(){self.onItem.call(self, this)});

    // event
    if (this.isDeviceSP()) this.s = new Swipe(this.$wrap);
    else this.s = new MouseDrag(this.$wrap);

    this.isTimeline = false;
    this.isLock = false;
    this.isDrag = false;

    // swipe event
    this.s.onStart = ()=>{

      this.isDrag = true;

    }
    this.s.onMove = (sign, val)=>{

      if (!this.isDrag||val<10) return;
      if (this.isTimeline) return;
      this.isTimeline = true;
      this.isDrag = false; // 連続でさせるなら、ここをコメントアウト

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

}