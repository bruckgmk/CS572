var fs = require("fs");
var path = require("path");

readFileAsync = function(pathName) {
   //console.log("the Path is "+pathName);
  fs.readFile(pathName, 'utf8', function(err, buffer) {
    process.send(buffer);
  });
};

process.on("message", pat => {
   // console.log("me first ..."+pat);
  var filePath = path.join(__dirname, pat);
  readFileAsync(filePath);
});