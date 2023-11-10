import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName;

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//body-parser
app.use(bodyParser.urlencoded({extended:true}));

//custom middleware for logging
function bandNameGenerator(req,res,next){
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/" ,(req,res) => {
  res.sendFile(__dirname + "/public/index.html"); //hard coded value
})

app.post("/submit" , (req,res) => {
res.send(`<h1>Your Band Name Generator</h1><p>${bandName}🤞🏻</p>`);
});