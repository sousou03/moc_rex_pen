// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// cf
// https://codepen.io/Pillowfication/pen/PNEJbY
  
import Base from '_MyLibs/Util/Base.es6';

import * as a from 'Util/Array/index.es6';

import Flow from './Flow.es6';

export default class Dom extends Base {

  constructor() {

    super();

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.isREv = true;
    this.isUEv = true;

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
    $(this.container).css('opacity', 1);
    $(this.container).addClass('flowWrap')

  }

  add() {

    this.flows = [];

    var $span = $('.spanWrap');
    var len = $span.length;
    for (var i = 0; i < len; i++) {
      
      var $target = $span.eq(i);
      var flow = new Flow($target, i);
      this.flows.push(flow);

      // append
      this.container.appendChild(flow.outer);

    }

  }

  update() {

    var height = gb.r.h;
    var delta = gb.up.delta;

    for (var i = 0; i < this.flows.length; i++) {

      var c = this.flows[i];
      c.update()
    
    }

  }
　
  timeline() {

    a.sort(this.flows, 'posx', false);

    for (var i = 0; i < this.flows.length; i++) {

      var c = this.flows[i];
      c.timeline(i * 0.03);
    
    }

  }

  show() {


  }

  hide() { 

  }

  onResize() {

       
  }

}