import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import ejs from "gulp-ejs";
import rename from 'gulp-rename';
import fs from "fs";
import PATH from '../../_setting/config';

// <!-- ************************************************************
//
// compile
//
// ************************************************************ -->

gulp.task("compileHTML", ()=>{

  gulp.src([PATH.src.ejs + 'page/**/*.ejs','!' + PATH.src.ejs + 'page/**/_*.ejs','!' + PATH.src.ejs + 'page/_src/**/*.ejs'])
      .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
      .pipe(ejs())
      .pipe(rename({extname: '.html'})) //出力ファイル名を指定
      .pipe(gulp.dest(PATH.dist.root))

});