import gulp from 'gulp';

import PATHS from '../paths';

export default function copy() {
	return gulp.src(PATHS.src.copy).pipe(gulp.dest(PATHS.build.copy));
}
