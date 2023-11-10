/* Writing to file System

const fs = require("fs");

fs.writeFile("message.txt","Hello from Karthiga" , (err) => {
if(err) throw err;
console.log("The file has been saved!!!");
});*/


// Reading from FileSystem
const fs = require("fs");

fs.readFile('./message.txt', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  });