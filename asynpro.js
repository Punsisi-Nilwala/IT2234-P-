// async
// event driven and non I/O blocking progarmme

// 1- read a file
// 2- request data from an api from internet
// 3- print messege


const fs = require('fs');
fs.readFile('file.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return 0;
    }
    console.log(data)
});

console.log("File reading is done...")
