const gulp = require("gulp");
const rename = require("gulp-rename");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const livereload = require("gulp-livereload");
const fs = require("fs");
const path = require("path");

function clearDir(dir){
    fs.readdir(dir, (err, files) => {
        if (err) {
            throw err;
        }
        for (const file of files) {
            console.log(path.sep);
            fs.rmSync(dir + path.sep + file, {force:true, recursive:true});
        }
    });
}

function build(cb) {
    const css = "css";
    clearDir(css);
    gulp.src('./src/scss/main.scss')
        .pipe(sass({outputStyle: "compact"}).on('error', sass.logError))
        .pipe(rename("style.css"))
        .pipe(gulp.dest(css));

    cb();
}


function run (cb) {
    clearDir("css");
    gulp.src("./src/scss/main.scss")
        .pipe(rename("style.css"))
        .pipe(sourcemap.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemap.write("maps"))
        .pipe(gulp.dest('css'))
        .pipe(livereload.reload());
 
    cb();
}


exports.build = build;
exports.run = ()=>{
    livereload.listen({open: true, port:3000, reloadPage: "index.html", start: true});
    gulp.watch('./src/**/*', run);

};
