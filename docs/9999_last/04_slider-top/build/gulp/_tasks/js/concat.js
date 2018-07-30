import gulp from "gulp";
import plumber from "gulp-plumber";
import concat from 'gulp-concat';
import PATH from '../../_setting/config';

// ------------------------------------------------------------
//  library
// ------------------------------------------------------------
gulp.task('concatJSLibs', ()=>{

    var src = [
                PATH.src.js + 'libs/util/Stats.js',

                PATH.src.js + 'libs/jquery/jquery.min.js',
                PATH.src.js + 'libs/jquery/jquery.throttle-debounce.min.js',

                PATH.src.js + 'libs/canvas/easeljs-0.8.1.min.js',

                PATH.src.js + 'libs/tween/TweenMax.min.js',
              ]

    gulp.src(src)
        .pipe(plumber())
        .pipe(concat('libs.js'))
        // .pipe(gulp.dest(PATH.dist.js));
        // .pipe(gulp.dest(PATH.dist.js + 'common/'));
        .pipe(gulp.dest(PATH.dist.js + 'unconcat/'));

});


gulp.task('concatPENJSLibs', ()=>{


    var src = [
                PATH.src.js + 'libs/util/Stats.js',

                PATH.src.js + 'libs/canvas/easeljs-0.8.1.min.js',
              ]

    gulp.src(src)
        .pipe(plumber())
        .pipe(concat('PENlibs.js'))
        // .pipe(gulp.dest(PATH.dist.js));
        // .pipe(gulp.dest(PATH.dist.js + 'common/'));
        .pipe(gulp.dest(PATH.dist.js + 'unconcat/'));

});
