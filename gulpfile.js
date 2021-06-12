var gulp        = require('gulp');
var concat      = require('gulp-concat')
var uglify      = require('gulp-terser')
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile all .scss into site_media/css/styles.css
gulp.task('sass', function() {
    return gulp.src([
            'node_modules/bootstrap/scss/bootstrap.scss',
            'node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss',
            'node_modules/@fortawesome/fontawesome-free/scss/brands.scss',
            'site_media/scss/styles.scss'
        ])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("site_media/css"))
        .pipe(browserSync.stream());
});

// Compile all javascript files into site_media/js/global.min.js
gulp.task('js', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            'node_modules/@fortawesome/fontawesome-free/js/all.js',
            'node_modules/@fortawesome/fontawesome-free/js/fontawesome.js',
            'node_modules/retinajs/dist/retina.min.js',
            'site_media/js/custom.js'
        ])
        .pipe(concat('global.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("site_media/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./"  
    });

    gulp.watch(['./node_modules/bootstrap/scss/bootstrap.scss', './site_media/**/*.scss'], gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.parallel('js','serve'));