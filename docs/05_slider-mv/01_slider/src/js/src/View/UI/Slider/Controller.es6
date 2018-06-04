//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Order from './Order.es6';

import Render from './Render/Render.es6';

export default class Controller extends Base {

  constructor($target) {

    super();

    this.isUEv = true;
    this.isUpdate = true;

    this.$wrap = $('.slider');
    this.$item = this.$wrap.find('.item');


    this.setup();
    this.setEvents();

  }

  setup() {

    this.len = this.$item.length;

    this.o = new Order(this.len);
    this.r = new Render(this.$wrap, this.len);

    this.autoSwitch();
  }


  next() {

    this.o.go();

    log(this.o);
    this.r.next(this.o.current);

  }

  prev() {

    this.o.back();

    this.r.prev(this.o.current);

  }

  update() {

  }

  autoSwitch() {

    this.next();

    clearTimeout(this.Timer);
    this.Timer = setTimeout(()=>{
        
      this.autoSwitch();
      
    }, 3000);
  }

  setEvents() {

    var self = this;

    super.setEvents();

  }

}
