var gulp = require('gulp'),
    jslint = require('gulp-jslint'),
    gls = require('gulp-live-server');

gulp.task('default', ['lint']);

gulp.task('lint', function() {
    return gulp.src(['app.js', './api/**/*.js', './data/**/*.js'])
        .pipe(jslint({
            node: true,
            stupid: true,
            reporter:'default',
            global: ['__dirname']
        }));
});

gulp.task('server', function() {
    var server = gls.new('app.js');
    server.start();

    gulp.watch(['public/**/*.css', 'public/**/*.html'], server.notify);
    gulp.watch('api/**/*.js', server.start);
})
