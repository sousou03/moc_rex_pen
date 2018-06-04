//--------------------------------------------------
//
//  SpanText
//
//--------------------------------------------------

export default class SpanText {

  constructor($wrap) {

    this.$wrap = $wrap
    this.$target = $wrap.find('div');

    this.setup();
    this.setEvents();

    this.timeline();

  }

  setup() {

    this.$wrap.css({
      // overflow: 'hidden',
      cursor: 'pointer'
    });
    this.$target.css({
      perspective: 15,
    });

    this.w = this.$wrap.innerWidth();
    this.h = this.$wrap.innerHeight();

    // spanで1文字1文字囲む
    this.setSpan(this.$target);

    // 各spanを取得
    this.$span = this.$target.find('span');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$span.length;

    // tween list
    this.list = [
      {from: {x:-50,opacity:0,ease: Power2.easeOut}, to:{x:0,opacity:1,ease: Power3.easeOut}},
      {from: {y:-50,opacity:0,ease: Power2.easeOut}, to:{y:0,opacity:1,ease: Power3.easeOut}},
      {from: {x:50,opacity:0,ease: Power2.easeOut}, to:{x:0,opacity:1,ease: Power3.easeOut}},
      {from: {y:50,opacity:0,ease: Power2.easeOut}, to:{y:0,opacity:1,ease: Power3.easeOut}},
      {from: {scale:3,opacity:0,ease: Power2.easeOut}, to:{scale:1,opacity:1,ease: Power3.easeOut}},
      {from: {scale:0,opacity:0,ease: Power2.easeOut}, to:{scale:1,opacity:1,ease: Power3.easeOut}},
      {from: {skewX:360,opacity:0,ease: Power2.easeOut}, to:{skewX:0,opacity:1,ease: Power3.easeOut}},
      {from: {skewY:360,opacity:0,ease: Power2.easeOut}, to:{skewY:0,opacity:1,ease: Power3.easeOut}},
      {from: {rotationX:225,opacity:0,ease: Power2.easeOut}, to:{rotationX:0,opacity:1,ease: Power3.easeOut}},
      {from: {rotationY:225,opacity:0,ease: Power2.easeOut}, to:{rotationY:0,opacity:1,ease: Power3.easeOut}},
      {from: {rotationZ:225,opacity:0,ease: Power2.easeOut}, to:{rotationZ:0,opacity:1,ease: Power3.easeOut}},
    ];

    this.reset();

  }

  reset() {

    this.arr = gb.u.a.randomArr(this.list.length);

    // fromをrandomに設定
    for (var i = 0; i < this.len; i++) {

      var j = this.arr[i]

      // 一旦完全リセット
      TweenMax.set(this.$span.eq(i), {x:0,y:0,scale:1,skew: 0,skewY:0,rotationX:0,rotationY:0,rotationZ:0});
      TweenMax.set(this.$span.eq(i), this.list[j].from);

    };

  }

  show () {

    for (var i = 0; i < this.len; i++) {

      var j = this.arr[i]

      var anim = TweenMax.to(this.$span.eq(i), this.dur, this.list[j].to);
      anim.delay(this.delay * i);

    };
    
  }

  hide () {

    for (var i = 0; i < this.len; i++) {

       var j = this.arr[i]

       var anim = TweenMax.to(this.$span.eq(i), this.dur, this.list[j].from);
       anim.delay(this.delay * i);

    };
    
  }

  timeline() {

    this.dur = 1.5
    this.delay = 0.05;
    this.dis = 0.4 // 重なりすぎると、上からきてしまうため、ちょっと延長
    var delay = this.delay * this.len + this.dur + this.dis;

    var tl = new TimelineMax({repeat: -1, delay: 1.0, repeatDelay: delay});

    tl
      .add(()=>{

        this.reset();

      })
      .add(()=>{

        this.show();

      })
      .add(()=>{

        this.hide();

      }, '+=' + 2.0)

  }

  setSpan($target) {

    var span = $target.text().replace(/(\S)/g, '<span>$1</span>');
    $target.html(span);

  }

  setEvents() {

  


  }

}