const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

// gulp scripts task
gulp.task('scripts', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

// set up a watcher to watch over changes
gulp.task('watch', ['scripts'], () => {
  gulp.watch('./src/**', ['scripts']);
});

gulp.task('default', ['watch']);