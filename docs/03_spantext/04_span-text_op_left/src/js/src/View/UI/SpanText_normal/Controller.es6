//--------------------------------------------------
//
//  SpanText
//
//--------------------------------------------------

import SetSpan from './SetSpan.es6';

import * as a from 'Util/Array/index.es6';

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
    this.$span = this.$target.find('span');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$span.length;
    this.$wrap.css('opacity', 1);

    this.ready();
    this.timeline();

  }

  ready() {

    this.$span.each((index, el)=>{

      TweenMax.set(this.$span.eq(index), {
        x: 50,
      });
      
    });

  }

  show () {

    var arr = a.randomArr(this.len);

    this.$span.each((index, el)=>{

      TweenMax.to(this.$span.eq(index), 1.2, {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        delay: index * 0.02
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