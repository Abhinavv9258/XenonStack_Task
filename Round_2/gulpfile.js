const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Task to start the server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./views"
        }
    });
});

// Task to watch for changes in HTML, CSS, JS files
gulp.task('watch', function () {
    gulp.watch('./views/*.html').on('change', browserSync.reload);
    gulp.watch('./public/*.css').on('change', browserSync.reload);
    gulp.watch('./routes/*.js').on('change', browserSync.reload);
});

// Default task to start the server and watch for changes
gulp.task('default', gulp.series('browser-sync', 'watch'));
