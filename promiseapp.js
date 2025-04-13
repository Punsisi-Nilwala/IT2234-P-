// Promise

// object from a operation
// mention the atatus of the operation

// 3 status:

// 1. waiting/pending
// 2. fulfilled/resolved - done
// 3. rejected/error

const fs = require('fs').promises;

const readFile = (filepath)=>{
    return fs.readFile('file.txt','utf8')//return a promise
}

readFile('file.txt').then((data)=>{
    console.log(data)
})

.catch((err)=>{
    console.log(err)
})