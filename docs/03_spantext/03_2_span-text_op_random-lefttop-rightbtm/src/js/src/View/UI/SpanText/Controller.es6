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
    this.$span = this.$target.find('span');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$span.length;
    this.$wrap.css('opacity', 1);

    this.timeline();

  }

  reset() {


  }

  show () {

    // var arr = a.randomArr(this.len);

    var w = this.$target.width();
    var h = this.$target.height();

    this.$span.each((index, el)=>{

      var wrapx = this.$target.offset().left;
      var x = $(el).offset().left;
      var delayx = (x - wrapx) / w;
      delayx = m.constrain(delayx, 0.0, 1.0);

      var wrapy = this.$target.offset().top;
      var y = $(el).offset().top;
      var delayy = (y - wrapy) / h;
      delayy = m.constrain(delayy, 0.0, 1.0);

      var delay = delayx + delayy / 9;

      TweenMax.to(this.$span.eq([index]), 1.2, {
        opacity: 1,
        ease: Power2.easeInOut,
        // delay: index * 0.02
        delay: delay
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

      }, 1.0)

  }

  setEvents() {

  


  }

}