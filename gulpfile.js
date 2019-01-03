var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');


var cssFiles = 'sass/**/*.?(s)css';

//CSS Concatonation and Minification
gulp.task('css', function() {
    gulp.src(cssFiles)
        .pipe(sass({outputStyle: 'nested'}))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
          browsers: ['last 99 versions'],
          cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(rename('main.min.css'))
        .pipe(csso())
        .pipe(gulp.dest('css'));

        gulp.watch(cssFiles, ['css']);
  });


  gulp.task('serve', function() {
    browserSync.init({
      files: [siteRoot + '/**'],
      port: 4000,
      server: {
        baseDir: siteRoot
      }
    });
    gulp.watch(cssFiles, ['css']);
    gulp.watch(jsSources, ['js']);
    gulp.watch(['_plugins/**/*.rb'], ['jekyll-full', 'jekyll']);
    
  });
  

gulp.task('default', ['css']);