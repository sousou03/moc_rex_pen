//--------------------------------------------------
//
//  Date
//
//--------------------------------------------------

export default class Date {

  constructor() {

 
  }

  setup() {

    log(gb.u.date());

  }

  update() {

    gb.u.time();

    log(gb.u.hour,gb.u.minute,gb.u.second);

  }
       
  // ニューヨーク時間の取得
  getNowAtNY() {

    gb.u.time();
    var hour = gb.u.hour
    var dis = 13; // ニューヨークとの時差

    hour = hour - dis;
    if (hour < 0) hour = 24 + hour;

    return hour;

  }

  // 朝夕夜判定
  judgeState() {

    var h = this.getNowAtNY();

    // 朝 6〜15
    if (6 <= h && h <= 15) {

      this.isState = this.stateList[0];

    // 夕 16〜20
    } else if (15 < h && h <= 20) {

      this.isState = this.stateList[1];

    // 夜 21〜5
    } else if ((20 < h && h <= 23) || (0 <= h && h <=5)) {

      this.isState = this.stateList[2];

    }

    // log(this.isState);

  }
       
  setEvents() {

    // gb.up.add(this.update.bind(this));

  }

}