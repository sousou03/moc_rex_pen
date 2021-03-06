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
      "Rana extractive Rana extractive<br>Rana extractive Rana extractive"
      // "Rana extractive",
      // "Pen International",
    ];

    this.startTextAnimation(0);

  }

  update() {


  }

  typing(text, i, cb) {
    
     if (i < (text.length)) {

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
      setTimeout(()=>{this.typing(text, index, cb)}, this.typespeed);

     } else if (typeof cb == 'function') {
       setTimeout(cb, 400);
     }

  }

  startTextAnimation(i) {

    log(this.dataText[i]);

    if (typeof this.dataText[i] == 'undefined'){
       
      this.startTextAnimation(0);
    
    // 順番にtype text
    } else if (i < this.dataText[i].length) {
  
      this.typing(this.dataText[i], 0, ()=>{
    
        setTimeout(()=>{this.clear(i);}, 400);

      });

    }
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
    if(newx.length>0) {         
      setTimeout(()=>{this.clear(i);}, this.clearspeed);
    // 文字を全て消したら、次のtext
    } else {
      setTimeout(()=>{this.startTextAnimation(i + 1);}, 50);
    }

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
