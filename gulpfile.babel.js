import gulp from 'gulp';
import clean from './gulp-tasks/clean';
import html from './gulp-tasks/html';
import styles from './gulp-tasks/styles';
import fonts from './gulp-tasks/fonts';
import assetsVersion from './gulp-tasks/assets-version';
import images from './gulp-tasks/images';
import svg from './gulp-tasks/svg';
import webpack from './gulp-tasks/webpack';
import zip from './gulp-tasks/zip';
import watch from './gulp-tasks/watch';
import server from './gulp-tasks/server';
import copy from './gulp-tasks/copy';

gulp.task('build', gulp.parallel(html, styles, fonts, copy, images, svg, webpack));

gulp.task('production', gulp.series(clean, 'build', assetsVersion));

gulp.task('zip', gulp.series('production', zip));

gulp.task('default', gulp.parallel('build', watch, server));
