import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function passingDataLogger(req,res,next){
  console.log("Request method "+req.method);
  next();
}
app.use(passingDataLogger);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {

  var firstName = req.body["fName"];
  var lastName = req.body["lName"];
  var count = firstName.length + lastName.length;
  res.render("index.ejs" , {lengthCount : count});

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
