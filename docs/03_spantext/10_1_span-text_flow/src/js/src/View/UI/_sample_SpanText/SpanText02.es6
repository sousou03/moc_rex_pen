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

    this.w = this.$wrap.innerWidth();
    this.h = this.$wrap.innerHeight();

    // spanで1文字1文字囲む
    this.setSpan(this.$target);

    // 各spanを取得
    this.$span = this.$target.find('span');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$span.length;

    this.reset();

  }

  reset() {

    this.arr = gb.u.a.randomArr(this.len);

    // 下に
    TweenMax.set(this.$span, {y: 100,opacity: 0});

  }

  show () {

    // 上へ上がってくる
    for (var i = 0; i < this.len; i++) {
      
      TweenMax.to(this.$span.eq(i), this.dur, {
        y: 0,
        opacity: 1,
        ease: Expo.easeOut,
        delay: this.delay * this.arr[i]
      })

    }
    
  }

  hide () {

    // 上に消える
    for (var i = 0; i < this.len; i++) {
      
      TweenMax.to(this.$span.eq(i), this.dur, {
        y: -100,
        opacity: 0,
        ease: Expo.easeIn,
        delay: this.delay * this.arr[i]
      })

    }
    
  }

  timeline() {

    this.dur = 1.5
    this.delay = 0.08
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