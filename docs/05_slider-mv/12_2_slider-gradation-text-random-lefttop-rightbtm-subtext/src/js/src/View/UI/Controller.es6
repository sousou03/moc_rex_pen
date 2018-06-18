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
    this.st1 = new SpanText($('.text01'), $('.subtext01 .inner'), $('.tag01 .inner'));
    this.st2 = new SpanText($('.text02'), $('.subtext02 .inner'), $('.tag02 .inner'));
    this.st3 = new SpanText($('.text03'), $('.subtext03 .inner'), $('.tag03 .inner'));
    this.st4 = new SpanText($('.text04'), $('.subtext04 .inner'), $('.tag04 .inner'));
    this.sts = [];
    this.sts.push(this.st1,this.st2,this.st3,this.st4);
    this.$item = $('.indicator .item');

    this.index = 0;


    if (gb.u.dv.isSP) this.s = new Swipe($(window));
    else this.s = new MouseDrag($(window));

    log(this.s, gb.u.dv);

    this.isTimeline = false;
    this.isLock = false;

    // swipe event
    this.s.onStart = ()=>{

    }
    this.s.onMove = (sign, val)=>{

    }
    this.s.onEnd = ()=>{

    }
    this.s.onSwipe = (sign)=>{

      if (this.isTimeline) return;
      this.isTimeline = true;

      if (sign>0) {
        this.tl.kill();
        this.next();
      } else {
        this.tl.kill();
        this.prev();
      }

    }

    this.timeline();

  }

  update() {

  }

  timeline() {

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
        tl.add(()=>{this.slider.next();}, 0.3)


      }, 1.0)
      .add(()=>{

        this.isTimeline = false;

      }, 4.0)

  }

  next() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        // text
        this.sts[this.index].hide('next');
        
      }, 0.0)
      .add(()=>{

        this.index++;
        this.index = this.index % this.sts.length;      

      }, 0.0)
      .add(()=>{

        // text
        this.sts[this.index].show('next');
        // indicator
        this.$item.removeClass('active')
        this.$item.eq(this.index).addClass('active');
        // img
        this.tl = new TimelineMax();
        this.tl
          .add(()=>{this.slider.next();}, 0.3)
          .add(()=>{
            this.isTimeline = false;
            this.timeline();
          }, 2.0)

      }, 0.35)
    
  }

  prev() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        // text
        this.sts[this.index].hide('prev');

      }, 0.0)
      .add(()=>{

        this.index--;
        if (this.index<0) this.index = this.sts.length - 1;

      }, 0.0)
      .add(()=>{

        // text
        this.sts[this.index].show('prev');
        // indicator
        this.$item.removeClass('active')
        this.$item.eq(this.index).addClass('active');
        // img
        this.tl = new TimelineMax();
        this.tl
          .add(()=>{this.slider.prev();}, 0.3)
          .add(()=>{
            this.isTimeline = false;
            this.timeline();
          }, 2.0)

      }, 0.35)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}