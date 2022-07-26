const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const refresh = require('gulp-refresh')

gulp.task('sass-compile', function () {
  return gulp.src('./scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error',sass.logError))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./css/'))
      .pipe(refresh())
});

gulp.task('watch', function (){
  refresh.listen()
  gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
});



