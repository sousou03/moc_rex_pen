//--------------------------------------------------
//
//  Time
//
//--------------------------------------------------

export default class Time {

  constructor() {

    // elapsed
    this.s = 0; // second
    this.ms = 0; // millisecond
 
  }

  setup() {

    gb.u.d.start();

  }

  update() {

    gb.u.d.elapsed();

    this.s = gb.u.d.s(); 
    this.ms = gb.u.d.ms(); 

    // 0埋め
    // this.n01 = gb.u.d.add0(gb.u.d.s());
    // this.n02 = gb.u.d.add0(Math.floor(gb.u.d.ms()/10));

  }

  // start() {

  //   this.setup();
  //   this.setEvents();

  // }
              
  // setEvents() {

  //   gb.up.add('Time', this.update.bind(this));

  // }

}
