/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';


inquirer
  .prompt([
    /* Pass your questions in here */
   {
    message: "Type in the url",
    name : "URL"
   }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    fs.writeFile('URL.txt', url, 'utf8',(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    console.log(answers);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      throw error;
    } else {
      // Something else went wrong
      console.log("Successfully done");
    }
  });