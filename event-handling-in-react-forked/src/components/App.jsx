import React, { useState } from "react";

function App() {
  const [buttonChange, setButtonChange] = useState("white");
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function buttonMouseOver() {
    setButtonChange("black");
  }

  function buttonMouseOut() {
    setButtonChange("white");
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handleHeadingText(event) {
    setHeadingText(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handleHeadingText}>
        <h1>Welcome {headingText} !!!!</h1>
        <input
          type="text"
          onChange={handleName}
          value={name}
          placeholder="What's your name?"
        />
        <button
          type="submit"
          onMouseOver={buttonMouseOver}
          onMouseOut={buttonMouseOut}
          style={{ backgroundColor: buttonChange }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
