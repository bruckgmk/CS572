

var dns = require('dns');
//const{promisify} = require('util')
dns.resolve4('www.mum.edu', function (err, address) {
  if (err) {
      throw err;
  }
  console.log('www.mum.edu IP address is: ' + JSON.stringify(address));
 
});

//With Promise
var dns = require('dns');   

  const promiseAddObj = new Promise(function(resolve, reject){
      dns.resolve4('www.mum.edu', function (err, address) {
       if (err) {
            throw err;
        }
        resolve(address);

        });
 });


promiseAddObj.then((address)=>{console.log("The Address with promise is: "+address)}).catch((err)=>{console.log(err)});

//Aync&Wait

  function promisesAddObj(){
      return new Promise(function(resolve, reject){
      dns.resolve4('www.mum.edu', function (err, address) {
       if (err) {
            throw err;
        }
        resolve(address);

        });
 });
}
 async function addressCall(){

    try {
        let result = await promisesAddObj();
        console.log("The result with Async is "+result);
        
        } catch (error) {
            console.log(error);
        }

    }

    addressCall();