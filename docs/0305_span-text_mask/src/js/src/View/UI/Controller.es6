//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import SpanText_mask_bottomToUp from './SpanText_mask_bottomToUp/Controller.es6';
import SpanText_mask_bottomToUpandRightToLeft from './SpanText_mask_bottomToUpandRightToLeft/Controller.es6';
import SpanText_mask_bottomToUpandRightToLeftPile from './SpanText_mask_bottomToUpandRightToLeft-pile/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    switch (gb.urlp.motion){
      case 'bottomToUp':
        new SpanText_mask_bottomToUp($('.text1'));
        break;
      case 'bottomToUpandRightToLeft':
        new SpanText_mask_bottomToUpandRightToLeft($('.text1'));
        break;
      case 'bottomToUpandRightToLeft-pile':
        new SpanText_mask_bottomToUpandRightToLeftPile($('.text1'));
        break;
      default:
        new SpanText_mask_bottomToUp($('.text1'));
        break;
    }

    

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}