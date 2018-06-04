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


  }

  show () {

    for (var i = 0; i < this.len; i++) {
      
      TweenMax.to(this.$span.eq(i), 1.5, {
        y: -100,
        opacity: 0,
        ease: Power4.easeIn,
        delay: 0.2 + Math.random() * 1.0,
        repeat: -1,
        repeatDelay: 1.7,
        yoyo: true
      })

    }
    
  }

  hide () {

    
  }

  timeline() {

    this.show();

  }

  setSpan($target) {

    var span = $target.text().replace(/(\S)/g, '<span>$1</span>');
    $target.html(span);

  }

  setEvents() {

  


  }

}