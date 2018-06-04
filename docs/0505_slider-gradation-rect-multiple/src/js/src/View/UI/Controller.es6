//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import GradationOverlay from './GradationOverlay.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    this.ga = new GradationOverlay($('#wrapper'));


    this.timeline();

  }

  update() {

  }

  timeline() {

    var tl = new TimelineMax({repeat: -1, delay: 2.0});
    var dur = 1.0;
    var divide = 10;
    var interval = dur / 12 * divide + dur + 0.1;
    log(dur, interval);
    var offset = 0.1
    var cnt = 0;
    var len = $('.img').length;

    tl
      .add(()=>{

        this.ga.show();

      }, 0.0)
      .add(()=>{

        this.ga.hide();

      }, interval + offset)
      .add(()=>{

        cnt++;
        cnt = cnt%len;

        $('.img').removeClass('active');
        $('.img').eq(cnt).addClass('active');

      }, interval + offset + interval)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}