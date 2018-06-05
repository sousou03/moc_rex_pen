import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import minimist from 'minimist';
import PATH from '../../_setting/config';

gulp.task('webpack', ()=>{

  return  gulp
            .src(PATH.src.js + 'src/**/*.js')
            .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
            .pipe(webpack(require('../../_setting/webpack.config.js')))
            .pipe(gulp.dest(PATH.dist.js + 'unconcat/'))
    
});

// ------------------------------------------------------------
// build.js / concat libs.js and main.js
// ------------------------------------------------------------
gulp.task('bundleJS', ['webpack'], ()=>{

    var argv = minimist(process.argv.slice(2));

    var src = [
                  PATH.dist.js + 'unconcat/libs.js',
                  PATH.dist.js + 'unconcat/main.js',
              ]

    if (argv.m==undefined) {

      gulp.src(src)
          .pipe(plumber())
          .pipe(concat('bundle.js'))
          .pipe(gulp.dest(PATH.dist.js))

    } else {

      gulp.src(src)
          .pipe(plumber())
          .pipe(concat('bundle.js'))
          .pipe(uglify({preserveComments : 'some'}))
          .pipe(gulp.dest(PATH.dist.js))

    }

});