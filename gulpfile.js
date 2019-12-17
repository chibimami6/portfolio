
// １ライブラリのインストール
// ２ライブラリの読み込み
// ３実行

// 関数の定義
// 使いたいfileのライブラリを読み込む
// ライブラリの読み込み
let gulp = require('gulp');
let sass = require('gulp-sass');
// CSSの何行目か見れるライブラリ
let sourcemaps = require('gulp-sourcemaps');
let sassGlob = require("gulp-sass-glob");
// minifyをしてくれるライブラリ
let cleanCSS = require('gulp-clean-css');
// ファイル名を変えてくれるライブラリ
let rename = require('gulp-rename');


// 関数の実行
// task("コマンド", 実行する内容)
// コンパイル
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compact' }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.task(['sass']));
});

gulp.task('minify', function() {
    // minify
    return gulp.src('./assets/css/*.css')
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./assets/css'));
});


