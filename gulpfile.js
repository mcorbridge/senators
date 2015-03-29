// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var minifyHTML = require('gulp-minify-html');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// JS hint task
gulp.task('jshint', function() {
	gulp.src('./src/scripts/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
	gulp.src(['./src/styles/css/**/*.css'])
		.pipe(concat('styles.css'))
		.pipe(autoprefix('last 2 versions'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./build/styles/css'));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
	var htmlSrc = './src/html/**/*.html',
		htmlDst = './build/html';
	gulp.src(htmlSrc)
		.pipe(minifyHTML())
		.pipe(gulp.dest(htmlDst));
});

// Compile Our Sass
gulp.task('sass', function () {
	return gulp.src('./src/styles/**/*.scss')
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('./build/styles/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src('./src/scripts/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./build/scripts/'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/scripts/'));
});

gulp.task('images', function () {
	return gulp.src('./src/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./build/images'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('./src/styles/**/*.scss', ['sass']);
	gulp.watch('./src/scripts/**/*.js', ['jshint', 'scripts']);
	gulp.watch('./src/html/**/*.html', ['htmlpage']);
	gulp.watch('./src/images/*', ['images']);
});

// default gulp task
gulp.task('default', ['jshint','scripts','styles','sass','htmlpage','images','watch']);




