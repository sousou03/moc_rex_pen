// ------------------------------------------------------------
//
//  Func
//
// ------------------------------------------------------------

export default class Func {

  constructor() {

    this.blank();
    this.requestAnimationFrame();
    this.scrollRestoration(false);

  }

  blank() {

    $(()=>{$('.blank').attr('target', '_blank');});

  }

  scrollRestoration(bool=true) {

    // スクロール位置を元の位置に戻す
    if (bool) {

      window.history.scrollRestoration = 'auto';

    // スクロール位置を必ず一番上に
    } else {

      window.history.scrollRestoration = 'manual';

    }    

  }

  requestAnimationFrame() {

    var FPS = 1000/60;

    window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
                                   window.mozRequestAnimationFrame || // 古いfirefox用
                                   window.webkitRequestAnimationFrame ||  // safari6以前、iOS6 safari用
                                   function( callback ) {
                                     window.setTimeout(callback, FPS);
                                   };

    window.cancelAnimationFrame = window.cancelAnimationFrame ||
                                  window.mozCancelAnimationFrame ||
                                  window.webkitCancelAnimationFrame ||
                                  function( timer ) {
                                    window.clearTimeout(timer);
                                  };      

  }

  // smart phone 全画面
  SPH($target=$('.section')) {

    var r = ()=>{
      $target.height(gb.r.h);
    }

    r();
    
    gb.r.add('re', r);

  }

  checkCssBlend() {

    if ('CSS' in window && 'supports' in window.CSS) {
      if (!window.CSS.supports('mix-blend-mode', 'soft-light')) {
        document.documentElement.classList.add('not-mix-blend-mode')
      }
    }

    log(gb.u.isIE);

    if (gb.u.isIE) {
      
      document.documentElement.classList.add('not-mix-blend-mode')
      
    };

  }

  notSaveImg() {

    // ------------------------------------------------------------
    //
    //  pc
    //
    // ------------------------------------------------------------

    if (gb.u.isPC) {

      $(()=>{
        $("img").on("contextmenu",()=>{
          return false;
        })
      })

    }


    // ------------------------------------------------------------
    //
    //  sp android
    //
    // ------------------------------------------------------------
    var v = gb.u.isAndroidVersion();

    if (v==undefined) return;
    if (v<5) {

      var timer;
      $("img").on("touchstart",()=>{
        timer = setTimeout(()=>{
          alert("画像は保存できません")
        },500)
        return false;
      })
      $("img").on("touchend",()=>{
        clearTimeout(timer);
        return false;
      })      

    }

  }

  smartRollover($target, off='_off.', on='_on.') {

    var $images = $target;

    for(var i=0; i < $images.length; i++) {  

      if($images.eq(i).get(0).getAttribute("src").match(off)) {  

        log(111);

        $images.eq(i).get(0).onmouseover = function() {  
            this.setAttribute("src", this.getAttribute("src").replace(off, on));  
        }  
        $images.eq(i).get(0).onmouseout = function() {  
            this.setAttribute("src", this.getAttribute("src").replace(on, off));  
        }  

      }

    }  

  } 

}