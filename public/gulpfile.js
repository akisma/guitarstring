'use strict';
 
var gulp 			= require('gulp'),
	sass 			= require('gulp-ruby-sass'),
	rename 			= require('gulp-rename'),
	concat 			= require('gulp-concat'),
	uglify 			= require('gulp-uglify');
 
gulp.task('sass', function () {
	return sass('src/**/*.scss', { style: 'expanded', compass: true })
        .pipe(gulp.dest('./build/css'));
});

/* can't be used until we go modular, let's make functional progress first */
gulp.task('js-dev', function(){
	return gulp.src(['./src/js/**/*.js'])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('build/js'));
});

/* this will be used to compile js for prod */
gulp.task('js-prod', function(){
	return gulp.src(['./src/js/**/*.js'])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('build/js'));
});
 
gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  // gulp.watch('src/js/**/*.js', ['js-dev']);
});

