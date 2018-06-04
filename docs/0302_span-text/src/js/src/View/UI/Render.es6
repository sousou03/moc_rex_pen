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

    // // 各spanを取得
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

    // \s  空白文字:[ \t\n\x0B\f\r]
    // \S  非空白文字:[^\s]
    // \w  単語構成文字:[a-zA-Z_0-9]
    // \W  非単語文字:[^\w]

    // var span = $target.text().replace(/(\S)/g, '<span>$1</span>');
    // // var span = $target.text().replace(/(\w|\s)/g, '<span>$1</span>');
    // $target.html(span);


    // brタグがあっても問題がないように
    // brで区切る
    var text = $target.html();
    var split = /<br>/g;
    // var split = /\r\n|\r|\n/g; // 改行コードなど
    var span = text.split(split);

    // trim
    for (var i = 0; i < span.length; i++) {
      span[i] = span[i].trim();
    }

    // span化
    for (var i = 0; i < span.length; i++) {
      span[i] = span[i].replace(/(\S)/g, '<span>$1</span>');
    }
    
    // br追加して連結
    var append = span.join('<br>');

    // append
    $target.html(append);



    // log
    log(text);
    log(span)
    log(append)


  }

  setEvents() {

  


  }

}