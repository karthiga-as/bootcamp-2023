import express from "express";

const app = express();
const port = 3000;

app.listen(port , () =>{
console.log(`Server is running on port ${port}`);
});

//Get Request
app.get("/" , (req,res)=> {
    res.send("<h1>Hello Am There </h1>")
});

app.get("/about" , (req,res)=> {
    res.send("<h1>About me</h1><p>Passionate Web Developer and Mother </p>")
});

app.get("/contact" , (req,res)=> {
        res.send("<h1>Contact Me:</h1><p>9655808000</p>")
});