'use strict';

const babel = require('gulp-babel'),
    browserify = require('browserify'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    log = require('gulplog'),
    rename = require('gulp-rename'),
    // source = require('vinyl-source-stream'),
    streamqueue = require('streamqueue'),
    tap = require('gulp-tap'),
    uglify = require('gulp-uglify');

const  jsDest = './js/';

gulp.task('scripts', () => {
    return streamqueue({ objectMode: true },
        gulp.src('./vendor/*.js'),
        gulp.src('script.js'))
        .pipe(babel({
            presets: ['env']
        }))
        // .pipe(tap(function (file) {
        //   log.info('bundling ' + file.path);
        //   file.contents = browserify(file.path, { debug: true }).bundle();
        // }))
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('scripts:watch', () => {
    gulp.watch('./js/**/*.js', ['scripts']);
});


gulp.task('default', ['scripts', 'scripts:watch']);
