//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import GradationOverlay from './GradationOverlay/Controller.es6';
import SpanText from './SpanText/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    this.ga = new GradationOverlay($('#inner'));
    this.gac = this.ga.c;
    this.st = new SpanText($('.text1'));

    this.timeline();

  }

  update() {

  }

  timeline() {

    var tl = new TimelineMax({repeat: -1, delay: 2.0, repeatDelay: 0.0});
    var dur = this.gac.dur;
    var divide = 10;
    var offset = 0.1
    var delay = this.gac.delay * divide + dur + offset;
    var interval = 1.0;
    var cnt = 0;
    var len = $('.img').length;

    tl
      // show
      .add(()=>{

        this.gac.show();
        var tls = new TimelineMax();
        tls.add(()=>{this.st.show();}, 0.5)
        
      }, 0.0)
      // hide
      .add(()=>{

        this.gac.hide();
        var tls = new TimelineMax();
        tls.add(()=>{this.st.hide();}, 0.05)        

      }, delay + interval)
      .add(()=>{

        // change img
        cnt++;
        cnt = cnt%len;
        $('.img').removeClass('active');
        $('.img').eq(cnt).addClass('active');

        // change text
        this.st.switch();

      }, delay + interval + delay + 0.05)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}