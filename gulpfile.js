var gulp = require('gulp'),
    jslint = require('gulp-jslint'),
    server = require('gulp-express');

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
    server.run(['app.js']);

    gulp.watch(['app.js', './api/**/*.js', './data/**/*.js'], server.notify());
    gulp.watch(['app.js', './api/**/*.js', './data/**/*.js'], ['lint']);
})
