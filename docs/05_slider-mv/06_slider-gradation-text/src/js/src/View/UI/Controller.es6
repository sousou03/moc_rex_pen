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

    var tl = new TimelineMax({repeat: -1, delay: 2.0, repeatDelay: 1.0});
    var dur = this.gac.dur;
    var divide = 10;
    var interval = dur / this.gac.divide * divide + dur + 0.1;
    var offset = 0.1
    var cnt = 0;
    var len = $('.img').length;

    tl
      .add(()=>{

        this.gac.show();
        var tls = new TimelineMax();
        tls
          .add(()=>{
            this.st.show();
          }, 0.2)
        
      }, 0.0)
      .add(()=>{

        this.st.hide();
        var tls = new TimelineMax();
        tls
          .add(()=>{
            this.gac.hide();
          }, 0.7)        

      }, interval + offset + 5.0)
      .add(()=>{

        cnt++;
        cnt = cnt%len;

        $('.img').removeClass('active');
        $('.img').eq(cnt).addClass('active');

        this.st.switch();

      }, interval + offset  + 5.0 + interval + 0.7)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}