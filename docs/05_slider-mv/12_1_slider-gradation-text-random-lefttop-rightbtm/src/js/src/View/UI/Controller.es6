//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import Slider from './Slider/Controller.es6';
import SpanText from './SpanText/Controller.es6';

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
    this.st1 = new SpanText($('.text01'));
    this.st2 = new SpanText($('.text02'));
    this.st3 = new SpanText($('.text03'));
    this.st4 = new SpanText($('.text04'));
    this.sts = [];
    this.sts.push(this.st1,this.st2,this.st3,this.st4);
    this.$item = $('.indicator .item');

    this.index = 0;

    this.timeline();

  }

  update() {

  }

  timeline() {

    var tl = new TimelineMax({repeat: -1, delay: 1.0, repeatDelay: 0.0});

    tl
      // show
      .add(()=>{

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


      }, 5.0)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}