//--------------------------------------------------
//
//  LoaderImage
//
//--------------------------------------------------

// TextLoader
// SVGLoader
// CSSLoader
// JavaScriptLoader
// BinaryLoader
// ImageLoader
// SpriteSheetLoader
// VideoLoader
// SoundLoader
// JSONLoader
// JSONPLoader
// XMLLoader

export default class LoaderImage {

  constructor() {

    this.cb = ()=>{};

  }

  img(len, path, name, cb=()=>{}, cb02=()=>{}){

    var i, img, nth, cnt = 1, list = [];

    for(i = 1;i < len;i++){
      img = new Image();
      nth = gb.in.u.add0(i,-5);
      this.list.push(img);
      img.onload = ()=>{
        cb02();
        cnt++;
        if(cnt == len) cb();
      }
      img.src = path+name+nth+".jpg";
    }

  }

  img02() {

    // bgVideoTile用の連番画像の読み込み
    gb.in.loadSec02Img = this.loader = new Loader();

    var len = gb.in.conf.sec02ImgNum;
    gb.in.rm.total += len;　// load数のtotalを計算

    var path = '/brand-special/161121-tiffany./ff15/royal/gallery2018/assets/resource/img/movie/bgImg/';
    var cb = ()=>{
      // gb.in.Sec02Bg.create();
    }
    var cb02 = ()=>{
      gb.in.rm.completed++;
    }

    // this.loader.imgSerialLoad(len,path,'tfny_',cb,cb02);
    this.loader.img(len+1,path,'tfny_',cb,cb02);

  }

  // perload.jsを使う場合
  img03() {

    // list用配列
    var list = [];

    // pathlist生成
    var num = 6;
    var path = '/history/ff15/royal/gallery2018/assets/resource/img/common/tex/';
    var name = 'img';
    var ext = '.jpeg';
    for (var i = 0; i < num; i++) {

      var index = i+1;
      var o = {
        id: 'img'+gb.u.s.add0(index),
        src: path+name+gb.u.s.add0(index,-2)+ext
      };

      // リストに追加
      list.push(o);

    }

    this.len = list.length;
    gb.in.rm.total += this.len; // load数のtotalを計算

    // 各imgロード後コールバック
    var cb = (e)=>{
      
      gb.in.rm.completed++;

    }

    // 全てが完了した際のコールバック
    var cb02 = ()=>{

      log(this.queue);

    }

    // 各種設定後、ロード
    this.queue = new createjs.LoadQueue();
    this.queue.setMaxConnections(6);
    this.queue.addEventListener('complete', cb02);
    this.queue.addEventListener("fileload", cb);
    this.queue.loadManifest(list);


    // this.queue.getResult('imgXXX') でアクセス

  }

  // cb02 load完了時 都度都度用コールバック関数
  imgSerialLoad(len, path, name, cb=()=>{},cb02=()=>{}){

    var i, img, nth, cnt = 0, list = [];

    var load = (i)=>{
        img = new Image();
        nth = gb.in.u.add0(i,-5);
        this.list.push(img);
        img.onload = ()=>{
          cb02();
          comp();
        }
        img.src = path+name+nth+".jpg";
    };

    var comp = ()=>{
        cnt++;
        if(cnt == len){
          cb();
        }else{
          load(cnt);
        }
    };

    load(cnt);
  }

  ajaxImgLoad(cb){

    var imgNum = $('img').length;
    var cnt = 0;

    $('img').each(function(i, elm) {

        var img = new Image();
        img.onload = ()=>{
          cnt++;
          if (cnt==imgNum-1) {
            cb();
          };
        }
        img.src = elm.src;

    });

  }

  // preloadjs
  loadImg() {

    var loadList = [];

    var num = Number(gb.in.conf.up.isLoadNum);

    for (var i = 0; i < num-1; i++) {
      
      var o = {id: 'img'+gb.u.s.add0(i), src: './ff15/royal/gallery2018/assets/resource/img/main/1/0303_'+gb.u.s.add0(i,-5)+'.jpg'};
      loadList.push(o);

    }

    var len = loadList.length;
    gb.in.rm.total += len; // load数のtotalを計算 s

    var $main = $('.main');
    var cb = (e)=>{
      
      gb.in.rm.completed++;
    
      // log(e.result,$(e.result));

    }
    var cb02 = ()=>{

      var cnt = 0;
      gb.in.rm.total += 1;

      this.imgList = [];

      // objをprepend
      for (var i = 0; i < len; i++) {
        
        var img = this.queue.getResult('img'+gb.u.s.add0(i));
        
        this.imgList.push(img);

      }

      gb.in.rm.completed++;

    }

    this.queue = new createjs.LoadQueue();
    this.queue.setMaxConnections(6);
    this.queue.addEventListener('complete', cb02);
    this.queue.addEventListener("fileload", cb);
    this.queue.loadManifest(loadList);

  }

}
