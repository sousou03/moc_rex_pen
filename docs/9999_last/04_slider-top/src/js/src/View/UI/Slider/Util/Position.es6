//--------------------------------------------------
//
//  Position
//
//--------------------------------------------------

export default class Position{

  constructor($target, $bg) {

    this.$target = $target;
    this.$bg = $bg;

    this.setup()
    this.setEvents();

  }

  setup() {

    this.progress     = 0;
    this.progressOld  = 0;
    this.isStageIn    = false;
    this.stageSize    = { width:0, height:0 };
    this.offset       = {left:0,top:0,width:0,height:0};
    this.stageInOffset = {min:0,max:1};

  }

  update() {

    var top = this.$target.offset().top - $(window).scrollTop();
    var h = this.$target.height();

    // progress
    this.progress   = 1 - (top+h)/(gb.r.h+h);
    var dir = this.progress-this.progressOld;

    // in,out
    if(this.progress >= 0 && this.progress <= 1){
      if(!this.isStageIn && this.progress > this.stageInOffset.min){
        // this.in(dir);
        this.isStageIn = true;
      }
    }else{
      if(this.isStageIn){
        // this.out(dir);
      }
      this.isStageIn = false;
    }
    this.progressOld = this.progress; 

  }

  onResize() {


  }

  setEvents() {

  }

}