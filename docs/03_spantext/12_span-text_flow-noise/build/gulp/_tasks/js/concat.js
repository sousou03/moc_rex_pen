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

                PATH.src.js + 'libs/tween/TweenMax.min.js',
                PATH.src.js + 'libs/tween/DrawSVGPlugin.min.js',

                PATH.src.js + 'libs/util/perlin.js',
              ]

    gulp.src(src)
        .pipe(plumber())
        .pipe(concat('libs.js'))
        // .pipe(gulp.dest(PATH.dist.js));
        // .pipe(gulp.dest(PATH.dist.js + 'common/'));
        .pipe(gulp.dest(PATH.dist.js + 'unconcat/'));

});