// Generated on 2017-01-30 using generator-static-angular v0.0.6
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-cssnano'),
    connect = require('gulp-connect'),
    opn = require('opn'),
    htmlmin = require('gulp-htmlmin'),
    clean = require('gulp-clean'),
    ghPages = require('gulp-gh-pages');


gulp.task('clean', function() {
    return gulp.src('dist/', {read: false}).pipe(clean());
});

gulp.task('build', ['clean'], function () {
    return gulp.src('dev/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', minifyCss()))
        .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
        .pipe(gulp.dest('./dist'));
});

gulp.task('reload', function () {
  return gulp.src('dev/**/**.*')
    .pipe(connect.reload());
});

gulp.task('connect', function (done) {
  connect.server({
    root: 'dev',
    port: 8080,
    livereload: true
  });
  opn('http://localhost:8080', done);
});

gulp.task('watch', function () {
  gulp.watch('dev/**/**.*', ['reload']);
});

gulp.task('deploy', function() {
  return gulp.src(['./dist/**/*', './dev/CNAME', './dev/README.md'])
    .pipe(ghPages({
        branch: 'master'
    }));
});

gulp.task('serve', ['connect', 'watch']);
gulp.task('default', ['build']);
