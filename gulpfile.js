// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('_/javascripts*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our LESS
gulp.task('less', function () {
  gulp.src('_/stylesheets/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('assets/stylesheets'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('_/javascripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('assets/javascripts'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/javascripts'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('_/javascripts/*.js', ['lint', 'scripts']);
    gulp.watch('_/stylesheets/*.less', ['less']);
});

// Default Task
gulp.task('default', ['lint', 'less', 'scripts', 'watch']);