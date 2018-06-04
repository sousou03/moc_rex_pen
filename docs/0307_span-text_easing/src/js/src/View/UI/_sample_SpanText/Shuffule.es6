//--------------------------------------------------
//
//  ShuffleText
//
//--------------------------------------------------

export default class ShuffleText {

  constructor(element, dur, durEnd, $text) {

    /**
     * The string for random text.
     * ランダムテキストに用いる文字列です。
     * @type {string}
     * @default 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
     */
    this.sourceRandomCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    // this.sourceRandomCharacter = '©2017stella88Inc.Allrightreserved.';
    var l = this.sourceRandomCharacter.length;
    this.sourceList = [];

    var w = $text.width();
    var ww  = Math.floor(w / element.innerHTML.length) * 0.98;
    // log(ww);

    for (var i = 0; i < l; i++) {
      var t = this.sourceRandomCharacter.charAt(i);
      var c = gb.colorList[Math.floor(Math.random()*gb.colorList.length)];
      t = '<span style="color: '+c+'; width: '+ww+'px; display:inline-block;">' + t + '</span>'
      this.sourceList.push(t);
    }
    // this.sourceRandomCharacter = text;
    /**
     * The string for effect space.
     * 空白に用いる文字列です。
     * @type {string}
     * @default '-'
     */
    this.emptyCharacter = '';
    /**
     * The milli seconds of effect time.
     * エフェクトの実行時間（ミリ秒）です。
     * @type {number}
     * @default 600
     */
    this.duration = dur;
    this.durationEnd = durEnd;
    this._isRunning = false;
    this._originalStr = '';
    this._originalLength = 0;
    this._timeCurrent = 0;
    this._timeStart = 0;
    this._randomIndex = [];
    this._requestAnimationFrameId = 0;
    this._element = element;
    this.isRightText = false;
    this.percentLock = false;
    this.setText(element.innerHTML);

    this.stop();
    this._randomIndex = [];
    var str = '';
    this.rate = 1 / this._originalLength;
    for (var i = 0; i < this._originalLength; i++) {
        var rate = i / this._originalLength;
        // this._randomIndex[i] = Math.random() * (1 - rate) + rate;
        // this._randomIndex[i] = i * (1 - rate);
        this._randomIndex[i] = rate;
        str += this.emptyCharacter;
    }
    this._element.innerHTML = str;

  }

  /**
   * Set new strings. テキストを設定します。
   * @param text テキスト文字列です。
   */
  setText (text) {
      this._originalStr = text;
      this._originalLength = text.length;
  }

  /** Play effect. 再生を開始します。 */
  start () {
      var _this = this;
      this._timeStart = new Date().getTime();
      this._isRunning = true;
      this._requestAnimationFrameId = requestAnimationFrame(function () {
        _this._onInterval();
      });
  }

  /** Stop effect. 停止します。 */
  stop () {
      this._isRunning = false;
      cancelAnimationFrame(this._requestAnimationFrameId);
  }

  /**
   * Dispose this instance.
   * メモリ解放のためインスタンスを破棄します。
   */
  dispose () {
      cancelAnimationFrame(this._requestAnimationFrameId);
      this.sourceRandomCharacter = null;
      this.emptyCharacter = null;
      this._isRunning = false;
      this.duration = 0;
      this._originalStr = null;
      this._originalLength = 0;
      this._timeCurrent = 0;
      this._timeStart = 0;
      this._randomIndex = null;
      this._element = null;
      this._requestAnimationFrameId = 0;
  }

  /**
   * インターバルハンドラーです。
   * @private
   */
  _onInterval () {

    // showの処理
      var _this = this;
      this._timeCurrent = new Date().getTime() - this._timeStart;
      // var percent = this._timeCurrent / this.duration;
      var t = gb.u.m.constrain(this._timeCurrent / this.duration, 0, 1);
      var percent = t;
      // var percent = gb.u.m.constrain(gb.u.e.inOutQuad(t), 0, 1);
      // var percent = gb.u.m.constrain(gb.u.e.inQuad(t), 0, 1);
      // var percent = gb.u.m.constrain(gb.u.e.outQuad(t), 0, 1);
      var str = '';
      if (!this.isRightText) {
      for (var i = 0; i < this._originalLength; i++) {

          if (percent >= this._randomIndex[i]) {
            // str += this.sourceRandomCharacter.charAt(Math.floor(Math.random() * (this.sourceRandomCharacter.length)));
            str += this.sourceList[Math.floor(Math.random() * (this.sourceList.length))];
          }

      }
      }

    // 切り替えの処理
      if (percent >= 1 && !this.percentLock) {
      this.percentLock = true;
          this.Timer = setTimeout(()=>{
            
            this._timeStart01 = new Date().getTime();
            this.isRightText = true;
              
          }, 100);
      }

    // 正しい文字になっていく処理
    if (this.isRightText) {
      var current = new Date().getTime() - this._timeStart01;
      // var percent = current / this.duration;
      // var t = gb.u.m.constrain(current / this.duration, 0, 1);
      var t = gb.u.m.constrain(current / (this.durationEnd), 0, 1);
      var percent02 = t;
      // var percent02 = gb.u.m.constrain(gb.u.e.inOutQuad(t), 0, 1);
      // var percent02 = gb.u.m.constrain(gb.u.e.inQuad(t), 0, 1);
      var percent02 = gb.u.m.constrain(gb.u.e.outQuad(t), 0, 1);
      // log(current, t);
      for (var i = 0; i < this._originalLength; i++) {

          // if (percent02 >= this._randomIndex[i]) {
          //     if (i!==0) str = this.replaceAt(str, i-1, this._originalStr.charAt(i-1));
          // }
          if (percent02 >= this._randomIndex[i]) {
            str += this._originalStr.charAt(i);
          } else {
            str += this.sourceList[Math.floor(Math.random() * (this.sourceList.length))];
          }

      }

    // end処理
      if (percent02 >= 1) {
          this.Timer = setTimeout(()=>{
            
            this._isRunning = false;
            this._end();
              
          }, 100);
      }
    }

    // output
    this._element.innerHTML = str;
    if (this._isRunning === true) {
        this._requestAnimationFrameId = requestAnimationFrame(function () {
            _this._onInterval();
        });
    }
  }

  _end() {

    var str = this._originalStr;
    this._element.innerHTML = str;

  }

  replaceAt(str, index, replacement) {
      return str.substr(0, index) + replacement+ str.substr(index + replacement.length);
  }

}