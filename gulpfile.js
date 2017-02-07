var gulp = require('gulp')
var exec = require('child_process').exec;

gulp.task('p8-watch', function(cb){
  exec('p8 start --watch', function (err, stdout, stderr) {
   console.log(stdout);
   console.log(stderr);
   cb(err);
 });
})

gulp.task('p8-install', function(cb){
  exec('p8 install -h', function (err, stdout, stderr) {
   console.log(stdout);
   console.log(stderr);
   cb(err);
 });
})
