import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    const { name, value } = event.target;
    setContact((prevVal) => {
      // Spread Operator
      return {
        ...prevVal,
        [name]: value
      };

      /*if (name === "fName") {
        return {
          fName: value,
          lName: prevVal.lName,
          email: prevVal.email
        };
      } else if (name === "lName") {
        return {
          fName: prevVal.fName,
          lName: value,
          email: prevVal.email
        };
      } else {
        return {
          fName: prevVal.fName,
          lName: prevVal.lName,
          email: value
        };
      }*/
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={updateContact}
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={updateContact}
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          name="email"
          onChange={updateContact}
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
