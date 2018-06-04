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
    this.len = this.$span.length;
    this.$wrap.css('opacity', 1);

    this.ready();
    this.timeline();

  }

  ready() {

    var w = this.$span.eq(0).width();
    var h = this.$span.eq(0).height();

    // x
    this.$span.each((index, el)=>{

      TweenMax.set(this.$span.eq(index), {x: w});
      
    });

    // y
    this.arr = a.randomArr(this.len);
    this.len_y = this.len / 2;
    for (var i = 0; i < this.len_y; i++) {
      TweenMax.set(this.$span.eq(this.arr[i]), {x: 0, y: h});
    }


  }

  show () {

    var arr = a.randomArr(this.len);

    // x
    this.$span.each((index, el)=>{

      TweenMax.to(this.$span.eq(index), 1.2, {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        // delay: index * 0.02
      });
      
    });

    // y
    for (var i = 0; i < this.len_y; i++) {
      TweenMax.to(this.$span.eq(this.arr[i]), 1.2, {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        delay: 0.1 + i * 0.0
      });
    }
    
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