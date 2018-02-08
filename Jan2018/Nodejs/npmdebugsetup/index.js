var request = require('request');

request('http://www.google.com',function (error,response,body) {
    
    if(!error){
        console.log("BODY: "+body);
        console.log("RESP: "+response.statusCode);
    }
});

