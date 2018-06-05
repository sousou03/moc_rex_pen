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

    this.index = 0;
    this.text = [
      'Shun Kawakami est classe et inclassable,<br>alors les marques l’ont remarqué',
      'De Tokyo la mégalopole aux<br> paysages préservés de Kochi',
      'seule une présence, le bruit des talons <br>hauts sur le bitume résonne à nos oreilles, le…',
      'Les puissantes photographies d’Araki<br>ébranlent l’esprit, le corps, et tous',
    ]

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
    // this.timeline();

  }

  ready() {

    var w = this.$span.eq(0).width();
    var h = this.$span.eq(0).height();

    // text
    this.$spant.each((index, el)=>{

      // TweenMax.set(this.$spant.eq(index), {x: w});
      
    });

  }

  show () {

    var arr = a.randomArr(this.len);

    this.$spant.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.02});
      // var tl = new TimelineMax({delay: index * 0.0});

      tl
        .add(()=>{

          this.$spant.eq(arr[index]).addClass('glow');

        }, 0.0)
      
    });
    
  }

  hide () {

    var arr = a.randomArr(this.len);

    this.$spant.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.02});
      // var tl = new TimelineMax({delay: index * 0.0});

      tl
        .add(()=>{

          this.$spant.eq(arr[index]).removeClass('glow');

        }, 0.0)
      
    });
    
  }

  switch() {

    this.index++;
    this.index = this.index%this.text.length;

    var text = this.text[this.index];
    this.$target.html(text);
    this.setup();

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