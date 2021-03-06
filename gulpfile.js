var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');

gulp.task('minify', function () {
  gulp.src('js/temperature.js')
    .pipe(uglify())
    .pipe(gulp.dest('minified'));

  gulp.src('index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

  gulp.src('css/normalize.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
   
   gulp.src('css/styles.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});

/*Tarea para ejecutar los tests*/