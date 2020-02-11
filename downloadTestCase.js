const https = require('https');
const fs = require('fs');



https.request('https://hr-testcases-us-east-1.s3.amazonaws.com/20589/input06.txt?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1581457427&Signature=pZ7v9lOFqqETO%2FO58fgYMLlfAto%3D&response-content-type=text%2Fplain',function(resp){
    let responseBody = '[';
    resp.on('data',function(chunk){
        console.log('----chunk ----- %j',chunk.length);
        responseBody +=chunk;
    });
    resp.on('end',function(){
        responseBody +=']';
        responseBody = responseBody.replace(' ',',');
        fs.writeFile('testCase.js',responseBody,function(err){
            if(err) throw err;
        });
    });
    
}).end();