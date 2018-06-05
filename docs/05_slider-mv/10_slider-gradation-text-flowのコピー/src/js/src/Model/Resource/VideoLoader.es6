//--------------------------------------------------
//
//  VideoLoader
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

export default class VideoLoader {

  constructor() {

    this.cb = ()=>{};

  }

  video(src, cb=()=>{}) {

    

  }

  videoSerialLoad(len, path, name, ex, cb=()=>{},cb02=()=>{}) {

    this.videoList = [];
    var i, img, nth, cnt = 1;

    var load = (i)=>{
        
      var isLoaded = false;
      var video = document.createElement('video');

      $(video).on('canplay', ()=>{
      // $(video).on('loadedmetadata', ()=>{

        if (!this.isLoad) {
          $(video).off('canplay');
          // $(video).off('loadedmetadata');
          isLoaded = true;
          this.videoList.push(video);
          cb02();
          comp();
        }

      });

      nth = gb.u.s.add0(i,-2);
      video.src = path+nth+name+'.'+ex;

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

  loadVideoByXHR_top() {

    // top
    var temp01 = 0;
    gb.in.rm.total+=100;
    var compTop = (src)=>{
      gb.in.video_top = new VideoMgr(src, null, $('#bg'));
      gb.in.video_top.fullsize($('#bg'), 'video_top', 1280, 720);      
      gb.in.video_top.video.loop = true;
      log(gb.in.rm.completed/gb.in.rm.total);
    }
    var progressTop = (percent)=>{
      var dis = percent - temp01;
      gb.in.rm.completed += dis;
      temp01 = percent;
      // log(dis)
      log(gb.in.rm.completed/gb.in.rm.total);
    }

    setTimeout(()=>{
      this.downloadMedia(gb.in.conf.video_top, progressTop, compTop, (e)=>{log(e)});  
    },800);
    

    // debug
    // $('#header').append('<div class="debug"></div>');
    // var progress = ()=>{
    //   $('.debug').html(gb.in.rm.completed/gb.in.rm.total);
    // }
    // gb.in.up.add('progress',progress);

  }

  loadVideoByXHR_main() {

    // main
    var temp02 = 0;
    gb.in.rm.total+=100;
    var compMain = (src)=>{
      gb.in.video_main = new VideoMgr(src, null, $('.section.movie .videoWrap'));
      gb.in.video_main.fullsize($('.section.movie'), 'video_main', 1280, 720);      
    }
    var progressMain = (percent)=>{
      var dis = percent - temp02
      gb.in.rm.completed += dis;
      temp02 = percent;
      log(gb.in.rm.completed);
      log(gb.in.rm.completed/gb.in.rm.total);
    }

    this.downloadMedia(gb.in.conf.video_main, progressMain, compMain, (e)=>{log(e)});

  }


  // 上手くいかない
  loadVideoByPreloadJS() {

    var cb = ()=>{
      log('done!!!');
    }


    var queue = new createjs.LoadQueue();
  
    queue.addEventListener("fileload", function(e){
        
        log('load')
        log(e.item);

        if (e.item.type == createjs.LoadQueue.VIDEO) {
            // document.body.appendChild(e.result);
            e.result.controls = true;
            $('#bg').prepend(e.result);
        }

    });
    // gb.in.video_top = new VideoMgr(gb.in.conf.video_top, cb, $('#bg'));
    // gb.in.video_top.fullsize($('#bg'), 'video_top', 1280, 720);
    queue.addEventListener("complete", function(e){
        
        log(e);
        // log()
        // log(queue.getResult('video_top'))

        // gb.in.video_top = new VideoMgr(queue.getResult('video_main', true), cb, $('#bg'));
        // // gb.in.video_top.video = queue.getResult('video_top');
        // gb.in.video_top.fullsize($('#bg'), 'video_top', 1280, 720);
        // // gb.in.video_top.ready();
        // log(gb.in.video_top.video);
        // gb.in.video_top.play();


        // gb.in.video_top.play();

        // $('#bg').prepend(queue.getResult('video_top'));

        // $('#bg video').attr('src', queue.getResult('video_top', true));


    });
    queue.addEventListener("progress", function(e){
        
        log(e.progress);

    });
     
    var manifest = [
        {
            id: 'video_top',
            src: gb.in.conf.video_top
        },
        {
            id: 'video_main',
            src: gb.in.conf.video_main
        },
    ];
    queue.installPlugin(createjs.Sound);
    queue.setMaxConnections(2);
    queue.loadManifest(manifest);

  }

  downloadMedia (url, progressHandler, completeHandler, errorHandler) {

    var xhr = new XMLHttpRequest(),
        progressPercentage = 0;
    xhr.open("GET", url, true);
    xhr.responseType = "blob";

    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            var URL = window.URL || window.webkitURL;
            var blob_url = URL.createObjectURL(xhr.response);
            completeHandler(blob_url);
        } else {
            errorHandler();
        }
    }, false);

    xhr.addEventListener("progress", function (event) {
        if (event.lengthComputable) {
            var pc = Math.ceil((event.loaded / event.total) * 100);
            if (pc !== progressPercentage) {
                progressPercentage = pc;
                progressHandler(pc);
            }
        }
    });
    xhr.send();

  }

  loadVideo_top() {

    var cb = ()=>{
      log('done!!!');
    }

    gb.in.video_top = new VideoMgr(gb.in.conf.video_top, cb, $('#bg'));
    gb.in.video_top.fullsize($('#bg'), 'video_top', 1280, 720);
    gb.in.video_top.video.loop = true;
    gb.in.video_top.play();

  }

  loadVideo_main() {

    var cb = ()=>{
      log('done!!!');
    }

    gb.in.video_main = new VideoMgr(gb.in.conf.video_main, cb, $('.section.movie'));
    gb.in.video_main.fullsize($('.section.movie'), 'video_main', 1280, 720);
    // gb.in.video_top.video.loop = true;
    gb.in.video_main.play();

    // var queue = new createjs.LoadQueue();
  
    // // queue.addEventListener("fileload", function(event){
        
    // //     log('load')

    // // });
    // // queue.addEventListener("complete", function(event){
        
    // //     log('complete')

    // // });
     
    // var manifest = [
    //     {
    //         id: 'image01',
    //         src: gb.in.conf.video_top
    //     },
    // ];
     
    // queue.loadManifest(manifest);

  }

  // loadVideo() {

  //   // bgVideoTile用の連番画像の読み込み
  //   var loader;
  //   loader = new Loader();

  //   var cb = ()=>{
  //     log('done!!!');
  //   }

  //   // リクエスト
  //   loader.video(gb.in.conf.video01, cb);

  // }

  loadVideoList() {

    // bgVideoTile用の連番画像の読み込み
    var loader;
    this.videoLoader = loader = new Loader();

    var len = 7;
    gb.in.rm.total += len;

    var path = '/history/ff15/royal/gallery2018/assets/resource/video/';
    var name = '_good';
    var ex = 'mp4';
    var cb = ()=>{
      this.isLoadVideoListFlag = true;
      log('done!!!');
      gb.in.mv.play();
    }
    var cb02 = ()=>{
      gb.in.rm.completed++;
    }

    // リクエスト
    // if (!this.isLoadVideoListFlag) loader.videoSerialLoad(len+1,path,name,ex,cb);
    loader.videoSerialLoad(len+1,path,name,ex,cb,cb02);

    // 5秒待ってもダメなようならリロード
    var isUpdate = true;
    var check = ()=>{
      log(gb.u.d.s());
      if (this.isLoadVideoListFlag) gb.in.up.remove('check');
      if (gb.u.d.s() > 5 && isUpdate) {
        isUpdate = false;
        location.reload();
      };      
    }
    gb.in.up.add('check',check);

  }

  supportVideoExt() {

    var ext = "";
    if (this.video.canPlayType("video/webm") == "probably" || this.video.canPlayType("video/webm") == "maybe") {
      ext = "webm";
    } else if(this.video.canPlayType("video/mp4") == "probably" || this.video.canPlayType("video/mp4") == "maybe") {
      ext = "mp4";
    } else if(this.video.canPlayType("video/ogg") == "probably" || this.video.canPlayType("video/ogg") == "maybe") {
      ext = "ogg";
    }

    return ext;

  }

}
