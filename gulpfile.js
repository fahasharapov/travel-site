var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default',function(done){
	console.log("Yes, we just created a default task.");
	done();
});


gulp.task('html',function(done){
	console.log("Another task that is being run on the background that you can't see.");
	done();
});

gulp.task('styles', function(done){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([autoprefixer, cssvars, nested]))
	.pipe(gulp.dest('./app/temp/styles'))
	done();

})


gulp.task('watch', () => {
   watch('./app/index.html', gulp.series('html'));
   watch('./app/assets/styles/**/*.css', gulp.series('styles')); //**-two starts mean any hypotetical folder
});

