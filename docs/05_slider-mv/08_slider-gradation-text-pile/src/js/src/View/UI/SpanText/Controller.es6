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
    this.$span = this.$target.find('span span');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.$spanx = this.$target.find('.x');
    this.$spany = this.$target.find('.y');
    this.len = this.$span.length;
    this.$wrap.css('opacity', 1);

    this.ready();
    // this.timeline();

  }

  ready() {

    this.w = this.$span.eq(0).width();
    this.h = this.$span.eq(0).height() / 2;

    // y
    this.$spany.each((index, el)=>{

      TweenMax.set(this.$spany.eq(index), {y: this.h});
      
    });

    // x
    this.$spanx.each((index, el)=>{

      TweenMax.set(this.$spanx.eq(index), {x: this.w});
      
    });

  }

  show () {

    var arr = a.randomArr(this.len);

    // y
    this.$spany.each((index, el)=>{

      TweenMax.to(this.$spany.eq(index), 1.2, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut,
        delay: index * 0.01
      });
      
    });
    
    // x
    this.$spanx.each((index, el)=>{

      TweenMax.to(this.$spanx.eq(index), 1.2, {
        opacity: 1,
        x: 0,
        ease: Power2.easeOut,
        delay: 0.5 + index * 0.01
      });
      
    });
    
  }

  hide () {

    var arr = a.randomArr(this.len);

    // y
    this.$spany.each((index, el)=>{

      TweenMax.to(this.$spany.eq(index), 1.2, {
        opacity: 0,
        y: - this.h,
        ease: Power2.easeInOut,
        delay: index * 0.02
      });
      
    });
    
    // x
    this.$spanx.each((index, el)=>{

      TweenMax.to(this.$spanx.eq(index), 1.2, {
        opacity: 0,
        x: - this.w,
        ease: Power2.easeInOut,
        delay: 0.1 + index * 0.02
      });
      
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