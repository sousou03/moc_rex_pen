//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '../../../Util/Base.es6';

import Order from './Order.es6';

import Objects from './Objects/Controller.es6';
import Render from './Render/Render.es6';

export default class Controller extends Base {

  constructor(stage, $wrap) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;
    this.$wrap = $wrap;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.obj = new Objects(this.stage, this.$wrap);
    this.o = new Order(this.obj.len);

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.r = new Render(this.stage, this.obj);

      }, 0.5)

  }


  next() {

    this.o.go();

    this.r.next(this.o.current, this.o.next, this.o.prev);

  }

  prev() {

    this.o.back();

    this.r.prev(this.o.current, this.o.next, this.o.prev);

  }

  next_op(isItem=false, index) {

    if (!isItem) this.o.go();
    else this.o.setCur(index);

    this.r.next_op(this.o.current, this.o.next, this.o.prev);

  }

  prev_op(isItem=false, index) {

    if (!isItem) this.o.back();
    else this.o.setCur(index);

    this.r.prev_op(this.o.current, this.o.next, this.o.prev);

  }

  update() {

  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.r = new Render(this.stage, this.obj);
        this.autoSwitch();

      }, 1.0)
      .add(()=>{


      }, 2.0)

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
