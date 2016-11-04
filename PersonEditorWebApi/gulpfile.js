var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    ts = require('gulp-typescript'),
    node;

var tsProject = ts.createProject("tsconfig.json");

gulp.task('default', ['watch', 'typescript', 'start_node']);

gulp.task('watch', function () {
    gulp.watch('*.ts', ['start_node']);
});

gulp.task('typescript', function () {
    console.log('Compile TypeScript to javascript');

    var tsResult = tsProject.src({ base: './' })
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./'));
});

gulp.task('start_node', ['typescript'], function () {
    if (node) {
        node.kill();
    }
    node = spawn('node', ['app.js'], { stdio: 'inherit' });
});