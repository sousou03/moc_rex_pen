//--------------------------------------------------
//
//  SpanText
//
//--------------------------------------------------

import SetSpan from './SetSpan.es6';

import * as a from 'Util/Array/index.es6';
import * as m from 'Util/Math/index.es6';

import LineBox from './LineBox.es6';

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
    this.$span = this.$target.find('.oh');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.$spant = this.$target.find('.t');
    this.len = this.$span.length;
    this.$wrap.css('opacity', 1);

    this.ready();
    this.timeline();

  }

  ready() {

    var w = this.$span.eq(0).width();
    var h = this.$span.eq(0).height();

    // text
    this.$spant.each((index, el)=>{

      // TweenMax.set(this.$spant.eq(index), {x: w});
      
    });

    // add linebox
    this.ls = [];
    this.$span.each((index, el)=>{

      var l = new LineBox($(el));
      this.ls.push(l);
      
    });

    // true, false
    this.bools = [];
    this.$span.each((index, el)=>{

      var bool = (Math.random()<0.5)? true: false;
      this.bools.push(bool);
      
    });

  }

  show () {

    var arr = a.randomArr(this.len);

    this.$spant.each((index, el)=>{

      var dur = 0.02;
      var times = 7;

      var tl = new TimelineMax({delay: index * 0.01});
      // var tl = new TimelineMax({delay: index * 0.0});

      tl
        .add(()=>{

          log(this.bools[index]);
          if (this.bools[index]) this.ls[arr[index]].show();
          this.$spant.eq(arr[index]).addClass('flashD');

        }, 0.0)
        .add(()=>{

          if (this.bools[index]) this.ls[arr[index]].hide();
          this.$spant.eq(arr[index]).css('opacity', 1);

        }, dur * times)
      
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