var http = require('http');
var fs = require('fs');
var path = require('path');

//Asyncronous read file
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var filePath = path.join(__dirname, 'bigfile.txt');
    let fsread = fs.readFile(
        filePath,
        "utf8",
        function(err,data){
            res.write(data);
            res.end();
        }
    );
}).listen(2000, ()=>{console.log("Server running on port 2000")})

//Stream Read

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'video/mp4'});

    var filePath = path.join(__dirname, 'avg.mp4');
    let fsread = fs.createReadStream(filePath)
    fsread.pipe(res);
        
    
}).listen(3000, ()=>{console.log("Server running on port 3000")})

//ReadFileSync
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var filePath = path.join(__dirname, 'bigfile.txt');
    let fsread = fs.readFileSync(filePath, "utf8");
            res.write(fsread);
            res.end()
    
    
}).listen(3000, ()=>{console.log("Server running on port 3000")})