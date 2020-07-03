module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-js', function () {
		return gulp.src([
				'bower_components/jquery/dist/jquery.min.js',
				'bower_components/popper.js/dist/umd/popper.min.js',
				'bower_components/bootstrap/dist/js/bootstrap.min.js',
				// Plugins
				'bower_components/owl.carousel/dist/owl.carousel.min.js',
				'bower_components/PACE/pace.min.js',
			])
			.pipe($.concat('lib.js'))
			.pipe(gulp.dest('./dist/js'));
	});
};
