var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src(['./scss/style.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src(['./../node_modules/bootstrap/dist/js/bootstrap.min.js',
        './../node_modules/jquery/dist/jquery.min.js',
        './../node_modules/popper.js/dist/umd/popper.min.js'])        
        .pipe(gulp.dest('./js'));    
});

gulp.task('serve', function () {
    browserSync.init(["./scss/*.scss", "./js/*.js"],{
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'js', 'serve']);

