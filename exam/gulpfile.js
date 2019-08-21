var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minifyhtml = require('gulp-minify-html');

//HTML 파일을 minify
gulp.task('minifyhtml', function () {
    return gulp.src('src/**/*.html') //src 폴더 아래의 모든 html 파일을
        .pipe(minifyhtml()) //minify 해서
        .pipe(gulp.dest('dist')) //dist 폴더에 저장
        .pipe(browserSync.reload({stream:true})); //browserSync 로 브라우저에 반영
});

//자바스크립트 파일을 minify
gulp.task('uglify', function () {
    return gulp.src('src/**/*.js') //src 폴더 아래의 모든 js 파일을
        .pipe(concat('main.js')) //병합하고
        .pipe(uglify()) //minify 해서
        .pipe(gulp.dest('dist/js')) //dist 폴더에 저장
        .pipe(browserSync.reload({stream:true})); //browserSync 로 브라우저에 반영
});

//CSS 파일을 minify
// gulp.task('minifycss', function () {
//     return gulp.src('src/**/*.css') //src 폴더 아래의 모든 css 파일을
//         .pipe(concat('main.css')) //병합하고
//         .pipe(minifycss()) //minify 해서
//         .pipe(gulp.dest('dist/css')) //dist 폴더에 저장
//         .pipe(browserSync.reload({stream:true})); //browserSync 로 브라우저에 반영
// });

gulp.task('sass', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer({
        //     browser: ['chrome > 0', 'ie > 0', 'firefox > 0']
        // }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream({match:'**/*.css'})); // broswer-sync로 전송 추가
});

gulp.task('server', ['uglify', 'sass', 'minifyhtml'], function () {
    return browserSync.init({
        server: {
            baseDir: './dist',
            index: "index.html"
        }
    });
});

//파일 변경 감지
gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['uglify']);
    // gulp.watch('src/**/*.css', ['minifycss']);
    gulp.watch('src/**/*.html', ['minifyhtml']);
    gulp.watch('src/**/*.scss', ['sass']);
});

//gulp를 실행하면 default 로 minifycss task를 실행
gulp.task('default', ['server', 'watch']);

gulp.task('sprite', function(){
	var spriteData = gulp.src('src/img/*.png')
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: '_sprite.scss',
            imgPath: '../../../img/sprite.png',
		}));
		var imgStream = new Promise(function(resolve){
			spriteData.img
			.pipe(buffer())
				.pipe(imagemin())
				.pipe(gulp.dest('dist/img/'))
				.on('end', resolve);
		});

		var cssStream = new Promise(function(resolve){
			spriteData.css
				.pipe(gulp.dest('src/scss/'))
				.on('end', resolve);
		})

		return Promise.all([imgStream, cssStream]);
});
