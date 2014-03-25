// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var fileinclude = require('gulp-file-include')
var imagemin = require('gulp-imagemin');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('dev/js*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our LESS
gulp.task('less', function () {
  gulp.src('dev/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('live/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('dev/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('live/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('live/js'));
});

// File Include
gulp.task('fileinclude', function() {
  gulp.src(['dev/*.html'])
    .pipe(fileinclude())
    .pipe(gulp.dest('live/'))
});

// Minify PNG, JPEG and GIF images
gulp.task('imagemin', function () {
    gulp.src('dev/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('live/img'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/js/*.js', ['lint', 'scripts']);
    gulp.watch('dev/less/*.less', ['less']);
    gulp.watch('dev/*.html', ['fileinclude']);
    gulp.watch('dev/img/*.png', ['imagemin']);
});

// Default Task
gulp.task('default', ['lint', 'less', 'scripts', 'watch', 'fileinclude', 'imagemin']);
