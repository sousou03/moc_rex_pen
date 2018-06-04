import gulp from "gulp";
import sass from "gulp-sass";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import autoprefixer from "gulp-autoprefixer";
import sassGlob from 'gulp-sass-glob';
import PATH from '../../_setting/config';

// <!-- ************************************************************
//
// complile
//
// ************************************************************ -->

gulp.task("compileSCSS", ()=>{

  gulp.src([PATH.src.css + 'style.scss'])
      .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
      .pipe(sassGlob())
      .pipe(sass({outputStyle : 'expanded'}))
      .pipe(autoprefixer({browsers: ['last 3 versions','iOS 7'],cascade: true}))
      .pipe(gulp.dest(PATH.dist.css))


});