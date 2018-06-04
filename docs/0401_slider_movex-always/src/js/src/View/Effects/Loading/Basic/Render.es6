//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

export default class Render {

  constructor(parent) {

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  add() {

    var html = '<div id="loading">' +
                  '<div class="ballWrap"><img src="./ff15/royal/gallery2018/assets/resource/img/common/ball.png" alt="" class="ball"></div>' +
                '</div>';

    $('body').append(html);

    // get dom
    this.$loading = $('#loading');
    this.$ball = $('#loading .ball');

  }

  show() {

    TweenMax.set(this.$ball, {x: -100});

    var tl = new TimelineMax();

    tl
      .to(this.$loading, 0.5, {
        opacity: 1,
        ease: Expo.easeInOut,
        onComplete: ()=>{
          
        }
      })
      .add(()=>{

        this.timeline();

      },'-=0.8')

  }

  update(e) {

  }

  timeline() {

    // ころころ


    var tl = new TimelineMax({repeat: -1, yoyo: true});

    tl
      .to(this.$ball, 2.0, {
        x: 100,
        ease: Power2.easeInOut,
      })
      .to(this.$ball, 2.0, {
        rotationZ: 180,
        ease: Power2.easeInOut,
        onComplete: ()=>{
          
        }
      },'-=2.0')

  }

  hide() {

    var tl = new TimelineMax();

    tl.to(this.$loading, 1.5, {
      opacity: 0,
      ease: Expo.easeIn,
      onComplete: ()=>{
        this.$loading.remove();
      }
    })

  }

  setEvents() {


  }

}