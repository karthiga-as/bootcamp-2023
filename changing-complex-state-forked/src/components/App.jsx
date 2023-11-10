import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function updateName(event) {
    const { name, value: newVal } = event.target;
    setFullName((prevVal) => {
      if (name === "fName") {
        return {
          fName: newVal,
          lName: prevVal.lName
        };
      } else {
        return {
          fName: prevVal.fName,
          lName: newVal
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={updateName}
          value={fullName.fName}
        />
        <input
          name="lName"
          value={fullName.lName}
          placeholder="Last Name"
          onChange={updateName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
