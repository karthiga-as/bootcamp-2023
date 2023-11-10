import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const appServer = express();

function dateLogger(req,res,next) {
    console.log(" Request Method "+req.method);
    next();
}

appServer.use(dateLogger);

appServer.listen(port , () => {
    console.log(`Server is running on ${port}`);
})

appServer.get("/" , (req,res) => {
    var dayNumber = new Date('July 24, 2023 12:54:30').getDay();
    var dayName = "weekend";
    var adv = "it's time to have fun!";
    if(dayNumber >= 1 && dayNumber <=5 ){
          dayName = "weekday";
          adv = "it's time to work hard!";
    } 
    res.render("index.ejs" , {
        weekName : dayName,
        advice : adv
    });

});

// Sunday - Saturday : 0 - 6


// Expected output: 2