var gulp = require('gulp'),
    gutil = require('gulp-util'),
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    minifyCss = require('gulp-cssnano'),
    ngAnnotate = require('gulp-ng-annotate')
    connect = require('gulp-connect'),
    opn = require('opn'),
    clean = require('gulp-clean'),
    ghPages = require('gulp-gh-pages');


gulp.task('clean', function() {
    return gulp.src('dist/', {read: false}).pipe(clean());
});

gulp.task('build', ['clean', 'fonts'], function (cb) {
    return gulp.src('dev/**/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', ngAnnotate()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', minifyCss()))
        .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
        .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
    return gulp.src(['dev/bower_components/font-awesome/fonts/fontawesome-webfont.*'])
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('reload', function () {
  return gulp.src('dev/**/**.*')
    .pipe(connect.reload());
});

gulp.task('connect-dev', function (done) {
  connect.server({
    root: 'dev',
    port: 8080,
    livereload: true
  });
  opn('http://localhost:8080', done);
});

gulp.task('connect-prod', function (done) {
  connect.server({
    root: 'dist',
    port: 8081,
    livereload: true
  });
  opn('http://localhost:8081', done);
});

gulp.task('watch-dev', function () {
  gulp.watch('dev/**/**.*', ['reload']);
});

gulp.task('watch-prod', function () {
  gulp.watch('dist/**/**.*', ['reload']);
});

gulp.task('deploy', function() {
  return gulp.src(['./dist/**/*', './dev/CNAME', './dev/README.md'])
    .pipe(ghPages({
        branch: 'master'
    }));
});

gulp.task('serve-dev', ['connect-dev', 'watch-dev']);
gulp.task('serve-prod', ['connect-prod', 'watch-prod'])
gulp.task('default', ['build']);
