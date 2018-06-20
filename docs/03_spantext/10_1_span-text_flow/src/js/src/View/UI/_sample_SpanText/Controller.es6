//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import SpanText01 from './SpanText01.es6';
import SpanText02 from './SpanText02.es6';
import SpanText03 from './SpanText03.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.setup();
    this.setEvents();

    this.loopStart = false;

  }

  setup() {    

    new SpanText01($('.spanText01'));
    new SpanText02($('.spanText02'));
    new SpanText03($('.spanText03'));

  }

}