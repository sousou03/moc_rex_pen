//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import Slider from './Slider/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    $('.sliderSub').each(function(index, el) {

      new Slider($(el), index);
      
    });    

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}