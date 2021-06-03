const gulp = require('gulp')
const { watch } = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function compilaSass(){
    return gulp.src('src/scss/**/*.scss')//filtrando os arquivos que vamos precisar
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "ugliComments": true }))//pega todo o codigo para ser minificado
        .pipe(concat('styles.min.css'))//pega todos os arquivos que ja foram compilados e concatena e gera um arquivo no final
        .pipe(gulp.dest('src/css'))//esse pipe vamos dizer qual destino iremos querer que o codigo fique
}

exports.default = function(){
    watch('src/scss/**/*.scss', compilaSass)
}