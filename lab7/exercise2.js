const mongo = require('mongodb').MongoClient;
const crypto = require('crypto');


const mongoClient = new mongo('mongodb://localhost:27017');
const algorithm = 'aes256';
const password = 'asaadsaad';
const decipher = crypto.createDecipher(algorithm,password);

mongoClient.connect((err,data)=>{
    const db = mongoClient.db('homework7');
    const qry = {'_id':0};
    const collection = db.collection('homework7');

    if(err) throw err;
    collection.findOne((err,fileData)=>{
        if(err) throw err;
        const fetchedValue = fileData.message;
        let dec = decipher.update(fetchedValue,'hex','utf8');
         dec += decipher.final('utf8');
        console.log(`The deciphered value is '${dec}'`)
        mongoClient.close();
    })
 
});