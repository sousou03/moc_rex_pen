//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import SpanText_normal from './SpanText_normal/Controller.es6';
import SpanText_jojonix from './SpanText_jojonix/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    switch (gb.urlp.motion){
      case 'normal':
        new SpanText_normal($('.text1'));
        break;
      case 'jojonix':
        new SpanText_jojonix($('.text1'));
        break;
      default:
        log('def');
        break;
    }

    

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}