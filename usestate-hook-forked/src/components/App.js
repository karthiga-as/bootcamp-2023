import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const now = new Date().toLocaleTimeString();
  const [time , setTime] = useState(now);
  //setInterval(changeTime, 1000); // on uncommenting automitacally updates the time for every single second

  function increase() {
    setCount(count + 1); 
  }
  
  function decrease() {
    setCount(count - 1);
  }

  function changeTime(){
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container"> 
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default App;
