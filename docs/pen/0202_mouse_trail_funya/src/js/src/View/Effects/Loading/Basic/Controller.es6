//--------------------------------------------------
//
//  ReadyMgr
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Events from './Events.es6';
import Render from './Render_def.es6';

export default class ReadyMgr extends Base {

  constructor() {

    super();

    this.name = 'ReadyMgr';

    this.completed = 0;
    this.total = 1; // 最初に0で割られるのを防ぐ
    this.current = 0;

    this.$wrap = $('#wrapper');

    if (gb.conf.LOADING) this.setup(); // loading有り
    else this.setup_not_loading(); // loading無し

    this.setEvents();

  }

  setup() {

    this.e = new Events(this);
    this.r = new Render();

    this.r.add();
    this.r.show();

  }

  setup_not_loading() {

    // this.$wrap.css('opacity', 1);
    this.onComplete();

  }

  update() {

    if (this.e) {

      this.e.update();
      this.r.update(this.e);

    }

  }

  onComplete() {

    // update処理をやめる
    this.offU();

    // this.r.hide();

    // timeline    
    var tl = new TimelineMax();

    tl
      // .to(this.$wrap, 2.4, {
      .to(this.$wrap, 0.0, {
        opacity: 1,
        delay: 0,
        ease: Power2.easeInOut,
        onComplete: ()=>{

        }
      })
      .add(()=>{
        $(window).trigger('loadingEnd');
      }, 1.0)

  }

}