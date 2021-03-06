const http = require('http');
const url = require('url');
const { fork } = require("child_process");
const server = http.createServer();

server.on('request', function(req, res){
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    const filePath = myUrl.query.url;
    console.log("HAHA "+filePath);
    const childProcess = fork("readFile.js");

    childProcess.send(filePath);
    res.writeHead(200, 
        { "Content-Type": "text/plain" 
    });

    childProcess.on('message', (fileData) => { 
        res.write(fileData);
        res.end();
    }); 
}).listen(3000, () => {
    console.log('Server is running with listening port 3000');
})