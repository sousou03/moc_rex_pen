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

    this.$item.addClass('transition');
    
  }

  next(num) {

    this.$item.removeClass('active');
    this.$item.eq(num).addClass('active');

  }

  prev(num) {


  }

  onResize() {


  }

}
