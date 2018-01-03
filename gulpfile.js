var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './assets/scss/*.scss';
var output = './assets/css';

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `assetsls/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass().on('error', sass.logError))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass','watch']);