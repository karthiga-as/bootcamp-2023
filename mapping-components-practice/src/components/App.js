import Card from "./Card";
import emojis from "../emojipedia"

// Incorporating ES6 functions like Map,Reduce,Filter,Find,FindIndex,SubString and Arrow Functions with example and finally chaning the emoji function with arrow function

var numbers = [2,4,6,8];

//Map -Create a new array by doing something with each item in an array.

const newNumbersMap = numbers.map(num => num*2);
console.log(newNumbersMap);

//Filter - Create a new array by keeping the items that return true.

const newNumbersFilter = numbers.filter(num => num>=4);
console.log(newNumbersFilter);

//Reduce - Accumulate a value by doing something to each item in an array.

const newNumbersReduce = numbers.reduce((accumulator,num) => accumulator+num);
console.log(newNumbersReduce);

//Find - find the first item that matches from an array.

const newNumberFind = numbers.find(num => num>4);
console.log(newNumberFind);


//FindIndex - find the index of the first item that matches.

const newNumberFindIndex = numbers.findIndex(num => num>4);
console.log(newNumberFindIndex);

//SubString
const newArraySubString = emojis.map(emoji => emoji.meaning.substring(0, 100));

console.log(newArraySubString);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojis.map(emojiVal => (
          <Card 
              key={emojiVal.id}
              emojiSymbol={emojiVal.emoji}
              emojiName={emojiVal.name}
              emojiMeaning={emojiVal.meaning}
          />
        ))}
    </dl>
    </div>
  );
}


export default App ;
