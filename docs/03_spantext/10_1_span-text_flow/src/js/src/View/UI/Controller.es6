//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import SpanText_flashDelay from './SpanText_flashDelay/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    switch (gb.urlp.motion){
      case 'random':
        new SpanText_flashDelay($('.text1'));
        break;
      default:
        new SpanText_flashDelay($('.text1'));
        break;
    }

    

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}