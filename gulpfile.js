var gulp = require('gulp'),
    jslint = require('gulp-jslint'),
    gls = require('gulp-live-server'),
    shell = require('gulp-shell');

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

gulp.task('migrate', shell.task([
    'node_modules/.bin/bower install',
    'node_modules/.bin/sequelize db:migrate --config data/config/config.json --migrations-path data/migrations --models-path data/models'
]));

gulp.task('serve', ['migrate'], function() {
    var server = gls.new('app.js');
    server.start();

    gulp.watch(['public/**/*.css', 'public/**/*.html'], server.notify);
    gulp.watch('api/**/*.js', server.start);
});
