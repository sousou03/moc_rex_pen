//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import MouseTrail from './MouseTrail/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    new MouseTrail();

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}