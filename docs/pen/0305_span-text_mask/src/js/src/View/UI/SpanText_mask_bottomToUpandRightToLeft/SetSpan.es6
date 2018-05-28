//--------------------------------------------------
//
//  SpanText
//
//--------------------------------------------------

export default class SpanText {

  constructor($target) {

    this.$target = $target;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.set();

  }

  reset() {


  }

  set($target) {

    // \s  空白文字:[ \t\n\x0B\f\r]
    // \S  非空白文字:[^\s]
    // \w  単語構成文字:[a-zA-Z_0-9]
    // \W  非単語文字:[^\w]

    // var span = $target.text().replace(/(\S)/g, '<span>$1</span>');
    // // var span = $target.text().replace(/(\w|\s)/g, '<span>$1</span>');
    // $target.html(span);


    // brタグがあっても問題がないように
    // brで区切る
    var text = this.$target.html();
    var split = /<br>/g;
    // var split = /\r\n|\r|\n/g; // 改行コードなど
    var span = text.split(split);

    // trim
    for (var i = 0; i < span.length; i++) {
      span[i] = span[i].trim();
    }

    // span化
    for (var i = 0; i < span.length; i++) {
      span[i] = span[i].replace(/(\S)/g, '<span class="oh"><span>$1</span></span>');
    }
    
    // br追加して連結
    var append = span.join('<br>');

    // append
    this.$target.html(append);

    // log
    log(text);
    log(span)
    log(append)


  }

  setEvents() {

  


  }

}