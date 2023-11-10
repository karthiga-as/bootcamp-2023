//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
const _dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000;
var secretPassword ;

//express objects
const app = express();

//body parser
app.use(bodyParser.urlencoded({
    extended:true
}));

//custom logging
function secretsProjectLogging(req,res,next){
    secretPassword = req.body["password"];
    console.log(req.body);
    next();
}

app.use(secretsProjectLogging);

app.listen(port , () => {
console.log(`Port is running on ${port}`);
});

app.get("/" , (req,res) =>{
 res.sendFile(_dirname+"/public/index.html");
});

app.post("/check" , (req,res) => {
   
    if(secretPassword === "ILoveProgramming") {
        res.sendFile(_dirname+"/public/secret.html");
    } else {
        res.sendFile(_dirname+"/public/index.html");
    }
   
})

