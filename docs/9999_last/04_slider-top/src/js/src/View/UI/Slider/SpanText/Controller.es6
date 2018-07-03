//--------------------------------------------------
//
//  SpanText
//
//--------------------------------------------------

import SetSpan from './SetSpan.es6';

import * as a from '../Util/Array/index.es6';
import * as m from '../Util/Math/index.es6';

export default class SpanText {

  constructor($wrap, $sub, $tag, $more) {

    this.$wrap = $wrap
    this.$target = $wrap.find('div');
    this.$sub = $sub;
    this.$tag = $tag;
    this.$more = $more;

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

  }

  reset() {


  }

  show (dir='next') {

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

      var delay = delayx + delayy / 3;

      TweenMax.to(this.$span.eq(index), 1.5, {
        opacity: 1,
        ease: Power2.easeInOut,
        delay: delay + Math.random() * gb.urlp.random
      });
      
    });

    if (dir=='next') var x = 5;
    else var x = -5;

    TweenMax.set(this.$sub.add(this.$tag).add(this.$more), {x: x,});
    TweenMax.to(this.$sub.add(this.$tag).add(this.$more), 1.5, {
      opacity: 1,
      x: 0,
      z: 0,
      delay: 0.5,
      ease: Power2.easeInOut,
    });
    
  }

  hide (dir='next') {

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

      var delay = delayx + delayy / 3

      TweenMax.to(this.$span.eq(index), 0.7, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: delay + Math.random() * gb.urlp.random
      });
      
    });

    if (dir=='next') var x = -5;
    else var x = 5;

    TweenMax.to(this.$sub.add(this.$tag).add(this.$more), 1.5, {
      opacity: 0,
      x: x,
      z: 0,
      delay: 0.0,
      ease: Power2.easeInOut,
    });
    
  }

  show_op (dir='next') {

    if (dir=='next') var x = 30;
    else var x = -30;

    TweenMax.set(this.$span, {x: x});
    this.$span.each((index, el)=>{

      TweenMax.to(this.$span.eq(index), 1.0, {
        x: 0,
        opacity: 1,
        ease: Power1.easeOut,
      });
      
    });

    TweenMax.set(this.$sub.add(this.$tag).add(this.$more), {x: x,});
    TweenMax.to(this.$sub.add(this.$tag).add(this.$more), 1.0, {
      opacity: 1,
      x: 0,
      z: 0,
      ease: Power1.easeOut,
    });
    
  }

  hide_op (dir='next') {

    if (dir=='next') var x = -30;
    else var x = 30;

    this.$span.each((index, el)=>{

      TweenMax.to(this.$span.eq(index), 1.0, {
        x: x,
        opacity: 0,
        ease: Power1.easeOut,
      });
      
    });

    TweenMax.to(this.$sub.add(this.$tag).add(this.$more), 1.0, {
      opacity: 0,
      x: x,
      z: 0,
      ease: Power1.easeOut,
    });
    
  }

  cancel() {

    TweenMax.killTweensOf(this.$span);
    TweenMax.killTweensOf(this.$sub);
    TweenMax.killTweensOf(this.$tag);
    TweenMax.killTweensOf(this.$more);

    TweenMax.to(this.$span, 0.3, {
      opacity: 0,
      ease: Power2.easeInOut,
    });
      
    TweenMax.to(this.$sub.add(this.$tag).add(this.$more), 0.3, {
      opacity: 0,
      x: 0,
      ease: Power2.easeInOut,
    });

  }

  setEvents() {




  }

}