import gulp from "gulp";
import browserSync from "browser-sync";
import PATH from '../../_setting/config';

// ------------------------------------------------------------
//  for DIST
// ------------------------------------------------------------
gulp.task("browserDist", ()=>{
    browserSync({
        server: {
            notify: false,
            // baseDir: PATH.dist.root // ルートとなるディレクトリを指定 distをルート
            baseDir: PATH.root + 'dist/', // ルートとなるディレクトリを指定
        },
        startPath: "/"
    });
});