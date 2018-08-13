// ------------------------------------------------------------
//
//  Swipe
//
// ------------------------------------------------------------

export default class Swipe {

  constructor($wrap=$('#wrapper')) {

    // ---------------
    //  dom
    // ---------------
    this.$wrap = $wrap;

    // ---------------
    //  variable
    // ---------------

    // position
    this.sX = 0;this.mX = 0;this.eX = 0; //startX,moveX,endX
    this.sY = 0;this.mY = 0;this.eY = 0; //startX,moveX,endX
    this.dis = 0;this.minDis = 50;
    this.premX = 0;
    this.premY = 0;

    // time
    this.sT=0;this.eT=0;this.minT = 300; //startTime,ellapsedTime,


    this.onStart = ()=>{};
    this.onMove = ()=>{};
    this.onEnd = ()=>{};
    this.onSwipe = ()=>{};

    this.setup();
    this.setEvents();

  }

  setup() {

  }

  onTouchStart (e) {

    // time
    this.sT = (new Date).getTime();
    // pos
    this.sX = e.originalEvent.changedTouches[0].pageX;
    this.sY = e.originalEvent.changedTouches[0].pageY;
    this.premX = this.sX;
    this.premY = this.sY;

    // コールバック
    this.onStart();

  }

  onTouchMove (e) {

    // pos
    this.mX = e.originalEvent.changedTouches[0].pageX;
    this.mY = e.originalEvent.changedTouches[0].pageY;
    var dis = this.sX - this.mX;
    var sign = 1;
    if (dis<0) sign = -1;

    this.onMove(sign, Math.abs(dis));

    var disX = this.premX - this.mX;
    var disY = this.premY - this.mY;
    this.premX = this.mX;
    this.premY = this.mY;

    // // スワイプ中にゆらゆらするのを止める
    var maxX = 5;
    var maxY = 20;
    log(disX, Math.abs(disX)>maxX, 'preventX')
    if (Math.abs(disX)>maxX) {
        e.preventDefault()
    }
    // log(disY, Math.abs(disY)>maxY, 'preventY')
    // if (Math.abs(disY)>maxY) {
    //     e.preventDefault()
    // }

  }

  onTouchEnd (e) {

    // コールバック
    this.onEnd();


    // time
    this.eT = (new Date).getTime() - this.sT;
    var disT = this.sT - this.eT;
    // pos
    this.eX = e.originalEvent.changedTouches[0].pageX;;
    var dis = this.sX - this.eX;
    var sign = 1;
    if (dis<0) sign = -1;

    // 最小時間より長かったら、処理
    // if(this.minT < this.eT) this.onSwipe();
    // 最小距離より長かったら、処理
    // log(dis, this.minDis);
    if(Math.abs(dis) > this.minDis) this.onSwipe(sign);

  }

  setEvents(){

    var self = this;

    this.$wrap.on('touchstart.Swipe', (e)=>{this.onTouchStart(e);});
    this.$wrap.on('touchmove.Swipe', (e)=>{this.onTouchMove(e);});
    this.$wrap.on('touchend.Swipe', (e)=>{this.onTouchEnd(e);});

  }
    
}