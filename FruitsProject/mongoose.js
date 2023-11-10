
import mongoose from 'mongoose'
 
//Connection to MongoDB database
//⁡⁢⁣⁣This line will specify the port where we will access our MongoDB Server
//⁡⁢⁣⁣Here "fruitsDB" is the name of the database where we want to connect to.⁡
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});
 
//Here we create new blueprint of our database(Schema)
//This lays foundation for every new fruit document that will be added to our DB.
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});
 
const Fruit = mongoose.model("Fruit", fruitSchema); // mongoose automatically convert Fruit to fruits as collection name
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide Name"]
    },
    age:{
        type:Number,
        min:1,
        max:90
    },
    favoriteFruit:fruitSchema
});

const banana = new Fruit({
    name: "Banana",
    rating: 9,
    review: "Banana gives you instant energy"
})
 
//This save() method in Mongoose is used to save this fruit document into fruit collection inside our fruitsDB
//banana.save();



const Person = mongoose.model("Person",personSchema);

const person = new Person({
    name:"Saanvi",
    age:2,
    favoriteFruit:banana
})

//person.save();


const kiwi = new Fruit({
    name: "KIWI",
    rating: 5,
    review: "Banana gives you instant energy"
});

const orange = new Fruit({
    name: "Orange",
    rating: 7,
    review: "Orange is a great immunity booster"
});

const grapes = new Fruit({
    name: "Grapes",
    rating: 9,
    review: "Grapes is a great immunity booster"
});

const anand = new Person({
    name:"Anand",
    age:34
})

const karthiga = new Person({
    name:"Karthiga",
    age:30
})

//karthiga.save();
 
//In latest version of mongoose insertMany has stopped accepting callbacks
//instead they use promises(Which Angela has not taught in this course)
//So ".then" & "catch" are part of PROMISES IN JAVASCRIPT.
 
//PROMISES in brief(If something is wrong please correct me):
//In JS, programmers encountered a problem called "callback hell", where syntax of callbacks were cumbersome & often lead to more problems.
//So in effort to make it easy PROMISES were invented.
//to learn more about promise visit : https://javascript.info/promise-basics
//Or https://www.youtube.com/watch?v=novBIqZh4Bk
 
/*Fruit.insertMany([kiwi, orange, grapes]) 
    .then(function(){
        console.log("Successfully saved all the fruits to fruitsDB");
    })
    .catch(function(err){
        console.log(err);
    });

Person.insertMany([anand,karthiga])
    .then(function(){
        console.log("Inserted all person into persons collection");
    })
    .catch(function(err){
        console.log(err);
    });


Fruit.find()
    .catch(function (err) {
        console.log(err);
    })
    .then(function (fruits) {
        mongoose.connection.close();
        fruits.forEach(fruit =>{
            console.log(fruit.name);
        })
       
    });
*/

/*Person.find()
    .catch(function (err) {
        console.log(err);
    })
    .then(function (persons) {
        mongoose.connection.close();
        persons.forEach(person =>{
            console.log(person.name);
        })
       
    });*/
orange.save();
Person.updateOne({_id: "64f260af24ea7114559343d3"}, {favoriteFruit: orange})
    .then(() => {
      console.log("Successfully Updated");
    })
    .catch((err) => {
      console.log(err);
    });
/*
Fruit.deleteOne({ name: "KIWI" })
    .then(() => {
      console.log("Successfully Deleted All Grapes");
    })
    .catch((err) => {
      console.log(err);
    });

Fruit.deleteMany({ name: "Orange" })
    .then(() => {
      console.log("Successfully Deleted All Grapes");
    })
    .catch((err) => {
      console.log(err);
    });

Person.deleteMany({name: "Saanvi"})
    .then(() => {
        
      console.log("Successfully Deleted All Data named Saanvi");
    })
    .catch((err) => {
      console.log(err);
    });*/