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

    var tl = new TimelineMax();
    tl
      .add(()=>{
        this.autoSwitch();
      }, 2.0)
    
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

    log(gb.text);

    // text show
    var index = this.o.current;
    gb.text.startTextAnimation(index);

    this.next();

    var tl = new TimelineMax();

    tl
      .add(()=>{

        // gb.text.clear(index);

      }, 4.0)
      .add(()=>{

        this.autoSwitch();

      }, 6.0)

  }

  setEvents() {

    var self = this;

    super.setEvents();

  }

}
