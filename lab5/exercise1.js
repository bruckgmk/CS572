
const express = require("express");
const axios = require("axios");
const { Observable } = require("rxjs");

const app = express();

app.set("x-power-by", false);
app.set("strict routing", true);
app.enable("case sensitive routing");
app.use(express.static(__dirname, { maxAge: '1d'}));

app.listen(3000,()=>{console.log("Listening on port 3000 ....")})

app.get('/users', (req, res)=>{
    const fetchData = async function(file) {
       await axios.get('https://randomuser.me/api/?results=10').then(file => {
           console.log ('2nd');
            res.status(200)
            .set('Content-Type', 'application/json')
            .send(file.data)
            .end();
        })
            console.log('final')
    }
    fetchData(res);
    console.log('1st')
})


app.get('/',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello')
    res.end();
})
