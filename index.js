var path = require('path');
var dirw = require('dirw');

dirw.dir('./src', function(dir_path, dir_name){
  if(dir_name == 'bin' || dir_name == '.bin'){
    return;
  }
  
  console.log(dir_path);
  console.log(dir_name);
});