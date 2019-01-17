const rx = require('rxjs');
const{Subject} = rx;
const os = require('os');
const http = require('http');

const subject = new Subject();

function checkSystem(reqSub){
    reqSub.res.write("Checking your system..."+'</br>');
    const numcpu = os.cpus().length;
    const memNum = os.totalmem();
    if(numcpu<4){
        reqSub.res.write('</br>'+'Processor is not supported'+'</br>');
    }
    else if(memNum<4000000000){
            reqSub.res.write('</br>'+'This app needs at least 4GB RAM');
    }else{
        reqSub.res.write('</br>'+'System is checked successfully');
    }
    reqSub.res.end();
}

subject.subscribe(checkSystem);

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    subject.next({req:req,res:res})
}).listen(3000,()=>console.log("Server running at port 3000"));