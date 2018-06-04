//--------------------------------------------------
//
//  SpanText
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import SetSpan from './SetSpan.es6';

import * as a from 'Util/Array/index.es6';
import * as m from 'Util/Math/index.es6';
import * as e from 'Util/Easing/index.es6';

export default class SpanText extends Base {

  constructor($wrap) {

    super();

    this.$wrap = $wrap
    this.$target = $wrap.find('div');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.$wrap.css({
        // overflow: 'hidden',
        cursor: 'pointer'
    });

    this.w = this.$wrap.innerWidth();
    this.h = this.$wrap.innerHeight();

    // spanで1文字1文字囲む
    this.s = new SetSpan(this.$target);

    // // 各spanを取得
    this.$span = this.$target.find('.oh');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.$spant = this.$target.find('.t');
    this.$spano = this.$target.find('.overlay');
    this.len = this.$span.length;
    this.$wrap.css('opacity', 1);

    this.ready();
    this.timeline();

  }

  ready() {

    var w = this.$span.eq(0).width();
    var h = this.$span.eq(0).height();
    this.t = 0;

    // text
    this.$spant.each((index, el)=>{

      // TweenMax.set(this.$spant.eq(index), {x: w});
      
    });

    // overlay
    this.$span.each((index, el)=>{

      var w = $(el).width();
      var h = $(el).height();

      TweenMax.set(this.$spano.eq(index), {width: w,height: h});
      
    });

    // indexの作成
    this.indexs = [];
    for (var i = 0; i < this.len; i++) {

      var rate = (i + 1) / this.len;

      // var rate = 1 / this.len;
      // rate = i * (1 - rate);

      // var rate = 1 / this.len;
      // rate = Math.random() * (1 - rate) + rate;

      this.indexs[i] = {rate: rate, lock: false};
      
    }

  }

  update() {

    for (var i = 0; i < this.len; i++) {

      var index = this.indexs[i];
      if (this.t >= index.rate && !index.lock) {
        index.lock = true;
        this.show(i);
      }

    }

  }

  show (index) {

    var dur = 0.02;
    var times = 7;

    var tl = new TimelineMax({delay: index * 0.01});

    tl
      .add(()=>{
        this.$spano.eq(index).addClass('flashD');
      }, 0.0)
      .add(()=>{
        TweenMax.set(this.$spant.eq(index), {opacity: 1});
      }, dur * times)
    
  }

  hide () {

    
  }

  timeline() {

    var tl = new TimelineMax({delay: 1.5});

    tl
      .to(this, 2.0, {
        t: 1,
        ease: Expo.easeOut,
      })
      

  }

}