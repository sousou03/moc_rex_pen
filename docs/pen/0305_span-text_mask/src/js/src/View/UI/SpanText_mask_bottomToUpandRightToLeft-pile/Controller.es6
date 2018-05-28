//--------------------------------------------------
//
//  SpanText
//
//--------------------------------------------------

import SetSpan from './SetSpan.es6';

import * as a from 'Util/Array/index.es6';
import * as m from 'Util/Math/index.es6';

export default class SpanText {

  constructor($wrap) {

    this.$wrap = $wrap
    this.$target = $wrap.find('div');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.$wrap.css({
        // overflow: 'hidden',
        cursor: 'pointer'
    });

    this.w = this.$wrap.innerWidth();
    this.h = this.$wrap.innerHeight();

    // spanで1文字1文字囲む
    this.s = new SetSpan(this.$target);

    // // 各spanを取得
    this.$span = this.$target.find('span span');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.$spanx = this.$target.find('.x');
    this.$spany = this.$target.find('.y');
    this.len = this.$span.length;
    this.$wrap.css('opacity', 1);

    this.ready();
    this.timeline();

  }

  ready() {

    var w = this.$span.eq(0).width();
    var h = this.$span.eq(0).height();

    // y
    this.$spany.each((index, el)=>{

      TweenMax.set(this.$spany.eq(index), {y: h});
      
    });

    // x
    this.$spanx.each((index, el)=>{

      TweenMax.set(this.$spanx.eq(index), {x: w});
      
    });

  }

  show () {

    var arr = a.randomArr(this.len);

    // y
    this.$spany.each((index, el)=>{

      TweenMax.to(this.$spany.eq(index), 1.2, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: index * 0.01
      });
      
    });
    
    // x
    this.$spanx.each((index, el)=>{

      TweenMax.to(this.$spanx.eq(index), 1.2, {
        opacity: 1,
        x: 0,
        ease: Expo.easeOut,
        delay: 0.2 + index * 0.01
      });
      
    });
    
  }

  hide () {

    
  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.show();

      }, 3.0)

  }

  setEvents() {

  


  }

}