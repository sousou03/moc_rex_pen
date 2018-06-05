// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// cf
// https://codepen.io/Pillowfication/pen/PNEJbY
  
import Base from '_MyLibs/Util/Base.es6';

import Flow from './Flow.es6';

export default class Dom extends Base {

  constructor() {

    super();

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.isREv = true;
    // this.isUEv = true;

    // wrap
    this.container = document.createElement('div');
    this.container.style.position = 'fixed';
    this.container.style.top      = '0';
    this.container.style.left     = '0';
    this.container.style.width    = '100%';
    this.container.style.height   = '0';
    this.container.style.overflow = 'visible';
    this.container.style.zIndex   = '9999';

    // append wrap
    $('#inner').prepend(this.container);

    // add
    this.add();

    // show wrap
    $(this.container).css({'opacity': 1, 'perspective': '80px'});
    $(this.container).addClass('flowWrap')

  }

  add() {

    this.flows = [];

    var $span = $('.spanWrap');
    var len = $span.length;
    for (var i = 0; i < len; i++) {
      
      var $target = $span.eq(i);
      var flow = new Flow($target, i, len);
      this.flows.push(flow);

      // append
      this.container.appendChild(flow.outer);

    }

  }

  update() {


  }
　
  show() {

    for (var i = 0; i < this.flows.length; i++) {

      var c = this.flows[i];
      c.show(i * 0.01);
    
    }

  }

  hide() {

    for (var i = 0; i < this.flows.length; i++) {

      var c = this.flows[i];
      c.hide(i * 0.01);
    
    }

  }

  remove() {

    $(this.container).remove();

  }

  onResize() {

       
  }

}