//ЗМІННІ
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
//---

//CSS TASK
gulp.task('css', function() {
    return gulp.src('./src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        errorLogToConsole: true,
        // outputStyle: 'compressed'
    }))
    .on('erorr', console.error.bind(console))
    .pipe(autoprefixer({
        browers: ['last 2 version'],
        cascade: false
    }))
    .pipe(rename({suffix: '.min'}))  
    .pipe(sourcemaps.write('./'))    
    .pipe(gulp.dest('./dist/css/'));
})
//-----------------

// image jpg minimized
gulp.task('img', function() {
    return gulp.src('./src/img/*.jpg')
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true})
    ]))
    .pipe(gulp.dest('dist/img'))
});
// --------------------

// image png minimized
gulp.task('img-png', function() {
    return gulp.src('./src/img/*.png')
    .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('dist/img'))
});
// -------------------

// image svg minimized
gulp.task('img-svg', function() {
    return gulp.src('./src/img/*.svg')
    .pipe(imagemin([
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('dist/img'))
});
// --------------------

//html task
gulp.task('html', function() {
    return gulp.src('./src/html/index.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/html/'))
  });
//--------------------
  //watcher
  gulp.task('watch', function() {
      gulp.watch('./*.html',gulp.series('html'));
      gulp.watch('./src/scss/*.scss',gulp.series('css'));
      gulp.watch('./src/img/*.jpg',gulp.series('img'));
      gulp.watch('./src/img/*.png',gulp.series('img-png'));
      gulp.watch('./src/img/*.svg',gulp.series('img-svg'));
  });
//------------------



gulp.task('default', gulp.parallel('css', 'html', 'watch'));









