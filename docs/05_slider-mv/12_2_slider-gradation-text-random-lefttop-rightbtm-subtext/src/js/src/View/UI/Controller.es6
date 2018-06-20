//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import Slider from './Slider/Controller.es6';
import SpanText from './SpanText/Controller.es6';

import Swipe from './Swipe.es6';
import MouseDrag from './MouseDrag.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    this.s = new Slider($('body'), 'cv');
    this.slider = this.s.slider;
    this.st1 = new SpanText($('.text01'), $('.subtext01 .inner'), $('.tag01 .inner'), $('.more01 .inner'));
    this.st2 = new SpanText($('.text02'), $('.subtext02 .inner'), $('.tag02 .inner'), $('.more02 .inner'));
    this.st3 = new SpanText($('.text03'), $('.subtext03 .inner'), $('.tag03 .inner'), $('.more03 .inner'));
    this.st4 = new SpanText($('.text04'), $('.subtext04 .inner'), $('.tag04 .inner'), $('.more04 .inner'));
    this.sts = [];
    this.sts.push(this.st1,this.st2,this.st3,this.st4);
    this.$item = $('.indicator .item');

    this.index = 0;


    if (gb.u.dv.isSP) this.s = new Swipe($(window));
    else this.s = new MouseDrag($(window));

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

        this.isTimeline = true;

        this.sts[this.index].hide();
        this.index++;
        this.index = this.index % this.sts.length;       
        
      }, 0.0)
      // hide
      .add(()=>{

        this.sts[this.index].show();
        this.$item.removeClass('active')
        this.$item.eq(this.index).addClass('active');
        var tl = new TimelineMax();
        tl.add(()=>{this.slider.next();}, 0.0)


      }, 0.6)
      .add(()=>{

        this.isTimeline = false;

      }, 1.0)

  }

  next() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .add(()=>{

        // text
        this.sts[this.index].hide_op('next');

        // index
        this.index++;
        this.index = this.index % this.sts.length;      

        // indicator
        this.$item.removeClass('active')
        this.$item.eq(this.index).addClass('active');
        

      }, 0.0)
      .add(()=>{
            
        // text
        this.sts[this.index].show_op('next');
          // img
        this.slider.next_op();

      }, 0.1)
      .add(()=>{
            
        this.isTimeline = false;
        this.timeline();

      }, 0.3)
    
  }

  prev() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .add(()=>{

        // text
        this.sts[this.index].hide_op('prev');

        // index
        this.index--;
        if (this.index<0) this.index = this.sts.length - 1;

        // indicator
        this.$item.removeClass('active')
        this.$item.eq(this.index).addClass('active');


      }, 0.0)
      .add(()=>{
          
        // text
        this.sts[this.index].show_op('prev');
          // img
        this.slider.prev_op();

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
      this.next();
    }
    if (index<this.index) {
      this.prev();
    }

  }

  setEvents() {

    super.setEvents();

    var self = this;

    this.$item.on('click', function(){self.onItem.call(self, this)});

  }

}