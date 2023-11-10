import React from "react";
import Login from "./Login";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Login userRegister={userIsRegistered} />
    </div>
  );
}

export default App;
