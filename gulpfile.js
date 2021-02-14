const gulp = require('gulp')

const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const webserver = require('gulp-webserver')
const sass =require('gulp-sass')

const cssHandler = () => {
    return gulp.src('./src/css/*.css')
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
}

const sassHandler=()=>{
    return gulp.src('./src/sass/*.scss')
                .pipe(sass())
                .pipe(autoprefixer())
                .pipe(cssmin())
                .pipe(gulp.dest('./dist/sass'))
}

const jsHandler = () => {
    return gulp.src('./src/js/*.js')
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

const htmlHandler = () => {
    return gulp.src('./src/pages/*.html')
        .pipe(htmlmin({
            removeAttributeQuotes: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyJS: true,	
            minifyCSS: true	
        }))
        .pipe(gulp.dest('./dist/pages'))
}

const imgHandler = () => {
    return gulp.src('./src/images/**')
        .pipe(gulp.dest('./dist/images'))
}

const libHandler = () => {
    return gulp.src('./src/lib/**')
        .pipe(gulp.dest('./dist/lib'))
}

const indexHandler=()=>{
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
}
const delHandler = () => {
    return del(['./dist'])
}
const webserverHandler = () => {
    return gulp.src('./dist')
        .pipe(webserver({
            host: 'localhost',
            port: 8000,
            // open: './pages',
            open: '/',
            livereload: true,
            proxies:[
                {
                source:'/gx',
                target:'http://127.0.0.1/test.php'
                }
        ]
        }))
}

const watchHandler = () => {
    gulp.watch('./src/css/*.css', cssHandler)
    gulp.watch('./src/sass/*.scss', sassHandler)
    gulp.watch('./src/images/**', imgHandler)
    gulp.watch('./src/js/*.js', jsHandler)
    gulp.watch('./src/lib/**', libHandler)
    gulp.watch('./src/pages/*.html', htmlHandler)

}

// module.exports.css=cssHandler 
// module.exports.js=jsHandler 
// module.exports.html=htmlHandler
// module.exports.img=imgHandler
// module.exports.lib=libHandler
module.exports.default = gulp.series(
    delHandler,
     gulp.parallel(indexHandler,cssHandler, sassHandler,jsHandler, htmlHandler, imgHandler, libHandler), webserverHandler, watchHandler
)