var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    minifyfHTML = require('gulp-minify-html'),
    jsonminify = require('gulp-jsonminify'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat');

var env,
    jsSources,
    sassSources,
    htmlSources,
    jsonSources,
    outputDir,
    sassStyle;

env = process.env.NODE_ENV || 'development';

if (env==='development') {
  outputDir = 'builds/development/';
} else  {
  outputDir = 'builds/production/';
}

 jsSources = ['components/scripts/*.js'];
 sassSources = [
    'components/sass/main.scss',
    'components/sass/tribes.scss', 
    'components/sass/flight.scss', 
    'components/sass/normalize.scss', 
    'components/sass/grid.scss'
  ];
 htmlSources = [outputDir + '*.html'];
 jsonSources = [outputDir + 'js/*.json'];


gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(outputDir + 'js'))
    //.pipe(jshint())
    //.pipe(jshint.reporter('default'))
    .pipe(connect.reload())
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: outputDir + 'images',
      style: sassStyle
    })
    .on('error', gutil.log))
    .pipe(gulpif(env === 'production',minifycss()))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(outputDir + 'css'))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['compass']);
  gulp.watch('builds/development/*.html', ['html']);
  gulp.watch('builds/development/js/*.json', ['json']);
  gulp.watch('builds/development/images/**/*.*', ['images']);
});

gulp.task('connect', function() {
  connect.server({
    root: outputDir, 
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
  .pipe(gulpif(env === 'production', minifyfHTML()))
  .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
  .pipe(connect.reload())
});

gulp.task('images', function() {
  gulp.src('builds/development/images/**/*.*')
  .pipe(gulpif(env === 'production', imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewBox: false}],
    use: [pngcrush()]
  })))
  .pipe(gulpif(env === 'production', gulp.dest(outputDir + 'images')))
  .pipe(connect.reload())
})

gulp.task('json', function() {
  gulp.src('builds/development/js/*.json')
  .pipe(gulpif(env === 'production', jsonminify()))
  .pipe(gulpif(env === 'production', gulp.dest('builds/production/js')))
  .pipe(connect.reload())
});

gulp.task('default', ['html', 'json','js', 'compass', 'images', 'connect', 'watch']);


