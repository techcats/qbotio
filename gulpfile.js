var gulp = require('gulp'),
    gutil = require('gulp-util'),
    preprocess = require('gulp-preprocess'),
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    inject = require('gulp-inject'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    minifyCss = require('gulp-cssnano'),
    ngAnnotate = require('gulp-ng-annotate')
    connect = require('gulp-connect'),
    opn = require('opn'),
    del = require('del'),
    ghPages = require('gulp-gh-pages');


gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('build', ['clean'], function (cb) {
    return gulp.src('dev/**/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', preprocess({context: {NODE_ENV: 'production'}})))
        .pipe(gulpIf('*.js', ngAnnotate()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', minifyCss()))
        .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
        .pipe(gulp.dest('dist'));
});

gulp.task('fonts', ['clean'], function() {
    return gulp.src(['dev/bower_components/font-awesome/fonts/fontawesome-webfont.*'], {read: false})
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('assets', ['clean'], function () {
    return gulp.src(['dev/assets/**/*'], {read: false}).pipe(gulp.dest('dist/assets/'));
});

gulp.task('reload', function () {
  return gulp.src('dev/**/**.*', {read: false})
    .pipe(connect.reload());
});

gulp.task('connect-dev', function (done) {
  connect.server({
    root: 'dev',
    port: 8080,
    livereload: true,
    fallback: 'dev/index.html'
  });
  opn('http://localhost:8080', done);
});

gulp.task('connect-prod', function (done) {
  connect.server({
    root: 'dist',
    port: 8081,
    livereload: true,
    fallback: 'dist/index.html'
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
  return gulp.src(['./dist/**/*', './gh_pages/**/*', './circle.yml'], {read: false})
    .pipe(gulpIf('index.html', inject(gulp.src(['./gh_pages/redirect.html']), {
      starttag: '<!-- inject:head:redirect.html -->',
      transform: function (filepath, file) {
        return file.contents.toString('utf8');
      }
    })))
    .pipe(ghPages({
        remoteUrl: 'https://github.com/techcats/qbotio.github.io.git',
        branch: 'master'
    }));
});

gulp.task('serve-dev', ['connect-dev', 'watch-dev']);
gulp.task('serve-prod', ['connect-prod', 'watch-prod'])
gulp.task('default', ['build', 'fonts', 'assets']);
