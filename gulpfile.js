var gulp          = require('gulp'),
    imagemin      = require('gulp-imagemin'),
    cssmin        = require('gulp-cssmin'),
    htmlmin       = require('gulp-htmlmin'),
    uglify        = require('gulp-uglify'),
    clean         = require('gulp-clean');



////////////////// project config //////////////////

var src = {
        srcDir: 'app/',
        htmlDir: 'app/**/*.html',
        cssDir: 'app/css/**/*.css',
        jsDir: 'app/js/**/*.js',
        imgDir: 'app/img/*',

        viewsCssDir:'app/views/css/*',
        viewsJsDir:'app/views/js/*',
        viewsImgDir:'app/views/images/*',
    },

    build = {
        buildDir: 'dist/',
        cssDir: 'dist/css/',
        jsDir: 'dist/js/',
        imgDir: 'dist/img/',

        viewsCssDir:'dist/views/css/',
        viewsJsDir:'dist/views/js/',
        viewsImgDir:'dist/views/images/',
    };


////////////////// project tasks //////////////////




gulp.task('html', function () {
  return gulp.src(src.htmlDir)
  .pipe(htmlmin({collapseWhitespace: true, minifyJS: true, minifyCSS: true}))
  .pipe(gulp.dest(build.buildDir))
});

gulp.task('css', function () {
  return gulp.src(src.cssDir)
  .pipe(cssmin())
  .pipe(gulp.dest(build.cssDir))
});

gulp.task('js', function () {
  return gulp.src(src.jsDir)
  .pipe(uglify())
  .pipe(gulp.dest(build.jsDir))
});

gulp.task('img', function() {
  return gulp.src(src.imgDir)
  .pipe(imagemin())
  .pipe(gulp.dest(build.imgDir));
});


////////////////// sub-project //////////////////

gulp.task('views-css', function () {
  return gulp.src(src.viewsCssDir)
  .pipe(cssmin())
  .pipe(gulp.dest(build.viewsCssDir))
});

gulp.task('views-js', function () {
  return gulp.src(src.viewsJsDir)
  .pipe(uglify())
  .pipe(gulp.dest(build.viewsJsDir))
})

gulp.task('views-img', function() {
  return gulp.src(src.viewsImgDir)
    .pipe(imagemin())
  .pipe(gulp.dest(build.viewsImgDir));
});


////////////////// task for cleaning dist folder //////////////////


gulp.task('clean', function () {
  return gulp.src('dist/*', {read: false})
  .pipe(clean());
});




gulp.task('build', ['html','css','js','img','views-css','views-js','views-img']);

gulp.task('default', ['build']);
