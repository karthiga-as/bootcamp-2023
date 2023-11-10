/* Common JavaScript
const superheroes = require('superheroes'); //CJS
var name = superheroes.random();
console.log("I am "+name); 

*/

// ECMA Module . Add type:module in package.json

import superheroes from "superheroes";
const name = superheroes.random();
console.log("I am "+name); 