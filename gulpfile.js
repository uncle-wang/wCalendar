var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jsSrc = './develop/wCalendar.js';
var jsDst = './min/';

// 压缩、合并main.js文件
gulp.task('uglifyJs', function() {

	gulp
		.src(jsSrc)
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest(jsDst));
});

gulp.task('default', ['uglifyJs']);