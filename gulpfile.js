var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));

function css_style (done) {
    gulp.src('./sass/style.scss')
    .pipe(sass({
        errorLogToConsole: true,
        // outputStyle: 'compressed'
    }))
    .on('erorr', console.error.bind(console))
    // .pipe(rename({suffix: '.min'}))           
    .pipe(gulp.dest('./css/'));
    done();
}


gulp.task(css_style)