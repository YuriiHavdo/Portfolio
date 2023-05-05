const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');


function css_style (done) {
    gulp.src('./scss/style.scss')
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
    // .pipe(rename({suffix: '.min'}))  
    .pipe(sourcemaps.write('./'))    
    .pipe(gulp.dest('./css/'));
    done();
}


function html() {
    
}

gulp.task(css_style)