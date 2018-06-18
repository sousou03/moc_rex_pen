//--------------------------------------------------
//
//  JSONLoader
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

export default class JSONLoader {

  constructor() {

    this.cb = ()=>{};

  }

  json(src,cb) {

    $.getJSON(src, (data)=>{

      cb(data);

    });

  }

}
