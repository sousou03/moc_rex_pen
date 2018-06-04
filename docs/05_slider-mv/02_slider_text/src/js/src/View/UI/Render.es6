//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Controller extends Base {

  constructor($target) {

    super();

    this.isUEv = true;
    this.isUpdate = true;

    this.$text = $('.text');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.typespeed = 30;
    this.clearspeed = 20;

    this.dataText = [
      "Shun Kawakami est classe et inclassable,<br>alors les marques l’ont remarqué",
      "Rana extractive Rana extractive<br>Rana extractive Rana extractive",
      "SOICHIRO FUJII<br>SOICHIRO FUJII",
      "OKAMURA OKAMURA<br>OKAMURA OKAMURA"
      // "Rana extractive",
      // "Pen International",
    ];

    // this.startTextAnimation(0);

  }

  update() {


  }

  typing(text, i) {
    
    // brだったら、飛ばす
    // log(i, text.charAt(i));
    if(text.charAt(i)==="<") {
      var newx = text.substring(0, i+4);
      var index = i + 4;
    } else {
      var newx = text.substring(0, i+1);            
      var index = i + 1;;
    }
    var finaltext = newx;

    log(finaltext)
    
    // var finaltext = text.substring(0, i+1);
    var type = '<span class="typing"></span>';
    // var type = '';
    finaltext += type; // 最後にtypeを追加
    this.$text.html(finaltext);

    // type text
    if (i < (text.length)) setTimeout(()=>{this.typing(text, index)}, this.typespeed);

  }

  startTextAnimation(i) {

    this.typing(this.dataText[i], 0);

  }

  clear(i) {

    // 文字取得、typingを消す
    var t = this.$text.html().replace('<span class="typing"></span>','');

    // brだったら、戻る
    if(t.charAt(t.length-1)===">") {
      var newx = t.substring(0, t.length-4);
    } else {
      var newx = t.substring(0, t.length-1);            
    }

    this.$text.html(newx+'<span class="typing"></span>')
    // this.$text.html(newx+'')

    // 文字が0以上なら、さらに消す
    if(newx.length>0) setTimeout(()=>{this.clear(i);}, this.clearspeed);

  }
  
  show() {

  }

  hide() {

  }  　

  setEvents() {

    var self = this;

    super.setEvents();

  }

}
