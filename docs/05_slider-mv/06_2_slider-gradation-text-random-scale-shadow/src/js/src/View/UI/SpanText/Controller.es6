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
    this.$span = this.$target.find('span');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$span.length;
    this.$wrap.css('opacity', 1);

    // this.timeline();

  }

  reset() {


  }

  show () {

    var arr = a.randomArr(this.len);

    this.$span.each((index, el)=>{

      TweenMax.to(this.$span.eq(arr[index]), 1.5, {
        opacity: 1,
        ease: Power2.easeInOut,
        delay: index * 0.012
      });
      
    });
    
  }

  hide () {

    var arr = a.randomArr(this.len);

    this.$span.each((index, el)=>{

      TweenMax.to(this.$span.eq(arr[index]), 1.5, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: index * 0.012
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

      }, 1.0)

  }

  setEvents() {

  


  }

}