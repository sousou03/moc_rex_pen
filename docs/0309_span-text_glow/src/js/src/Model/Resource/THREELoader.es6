//--------------------------------------------------
//
//  THREELoader
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

export default class THREELoader {

  constructor() {

    this.cb = ()=>{};

  }

  textureByName(len,r,cbProg,cbComp) {

    this.list = [];
    var cnt = 0;

    var load = (i)=>{

      var resource = r[i];
      var tl = new THREE.TextureLoader();
      // tl.crossOrigin = 'anonymous';
      tl.load(resource, (tex) => {

        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        
        // ロード数をカウント
        cnt++;
        this.list.push(tex);

        cbProg();
        if (cnt==len) cbComp();
        else load(cnt);

      });

    }

    load(cnt);

  }

  texture(len,r,cbProg,cbComp) {

    this.list = [];
    var cnt = 0;

    var load = (i)=>{

      var resource = r.path + r.name + gb.u.s.add0(i+1,-2) + r.ext;
      var tl = new THREE.TextureLoader();
      tl.crossOrigin = 'anonymous';
      tl.load(resource, (tex) => {

        log(tex);

        // ロード数をカウント
        cnt++;
        this.list.push(tex);

        cbProg();
        if (cnt==len) cbComp();
        else load(cnt);

      });

    }

    load(cnt);

  }

  obj() { 

    gb.objList = [];


    var texture = new THREE.Texture();

    var loader = new THREE.ImageLoader();
    loader.load( gb.in.conf.tex01, (image)=>{

      texture.image = image;
      texture.needsUpdate = true;

      log(texture);

    });

    // var texture = THREE.ImageUtils.loadTexture(gb.in.conf.tex01);

    // obj
    this.object = new THREE.OBJLoader();
    this.object.load( gb.in.conf.OBJPATH01, (e)=>{
    // this.object.load( './ff15/royal/gallery2018/assets/resource/obj/_buf/stage/stage01_01.obj', (e)=>{

      e.traverse( function ( child ) {

        if ( child instanceof THREE.Mesh ) {

          // child.material.map = texture;
          child.material.side = THREE.DoubleSide;
          
          child.geometry.computeBoundingBox()
          
          // # 原点を真ん中に
          // if @_list[@_loadedNum].rePos
          var b = child.geometry.boundingBox;

          // 横に置く
          child.rotation.x = - Math.PI / 2;

          // 中央に
          child.position.x = -b.min.x - (b.max.x - b.min.x) * 0.5;
          child.position.y = -b.min.y - (b.max.y - b.min.y) * 0.5;
          child.position.z = -b.min.z - (b.max.z - b.min.z) * 0.5;

          // log(b,b.min.x,(b.max.x - b.min.x)/2);
          // log(b,b.min.y,(b.max.y - b.min.y)/2);
          // log(b,b.min.z,(b.max.z - b.min.z)/2);
          // child.position.z = -b.min.z;

          // 下の方へ移動
          child.position.y -= 200;

        }

        log(child);

      });

      // e.rotation.x = Math.PI / 4
      // e.position.set(0,-100,0);/
      // e.scale.set(0.5,0.5,0.5);

      // log(e);

      gb.objList.push(e);

      this.cb();

    })

  }

  mtl() { // not work

    var m = new THREE.MTLLoader();
    // m.setBaseUrl( "http://threejs.org/examples/obj/walt/" );
    // m.setPath( "http://threejs.org/examples/obj/walt/" );
    m.load( gb.in.conf.MTLPATH01, ( materials )=>{

      materials.preload();

      var o = new THREE.OBJLoader();
      // o.setMaterials( materials );
      // o.setPath( "http://threejs.org/examples/obj/walt/" );
      o.load( gb.in.conf.OBJPATH01,  (o)=>{

        // mesh = object;
        // mesh.position.y = -50;
        // scene.add( mesh );

        log(o);

      });

    });

  }

  obj_mtl() {

    gb.objList = [];

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setBaseUrl( 'assets/resource/obj/' );
    mtlLoader.setPath( 'assets/resource/obj/' );
    mtlLoader.load( 'male02.mtl', ( materials )=>{

      materials.preload();

      var objLoader = new THREE.OBJLoader();
      objLoader.setMaterials( materials );
      objLoader.load( gb.in.conf.OBJPATH02, function ( object ) {

        // object.position.y = - 95;
        object.position.y = 100;
        // scene.add( object );
        gb.objList.push(object);

      });

    });

  }

  collada() { // not work

    gb.daeList = [];

    var loader = new THREE.ColladaLoader();
    //loader.options.convertUpAxis = true;
    loader.load( gb.in.conf.DAEPATH01, function ( model ) {
      
      // console.log(model)
      // object = model.skins[ 0 ];
      log(model);
      var dae = model.scene;
      log(dae);
      dae.position.set(0,0,0);
      dae.scale.set(10,10,10);

      gb.daeList.push(dae);
      
      // scene.add(dae);
      // console.log(scene);

    });

  }

  json3DModel() { // not work

    

  }

}
