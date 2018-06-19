//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Render extends Base {

  constructor($wrap, len) {

    super();

    this.$wrap = $wrap;
    this.$item = $wrap.find('.item');

    this.setup();
    this.setEvents();

  }

  setup() {

  }

  next(current, next, prev) {

    var tl = new TimelineMax();

    var x = 100;

    tl
      .set(this.$item.eq(current), {
        x: x,
        opacity: 0,
        zIndex: 2,
      }, 0.0)
      .set(this.$item.eq(prev), {
        zIndex: 1,
      }, 0.0)

      .to(this.$item.eq(current), 2.0, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut,
      }, 0.0)
      .to(this.$item.eq(prev), 2.0, {
        // x: -x,
        opacity: 0,
        ease: Power2.easeInOut,
      }, 0.5)

  }

  prev(num) {


  }

  onResize() {


  }

}
