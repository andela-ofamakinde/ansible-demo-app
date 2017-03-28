var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
    nodemon({script: './index.js', stdout: true})
    .on('restart', function() {
        console.log("node restart")
    })
});

gulp.task('start', ['nodemon']);s
