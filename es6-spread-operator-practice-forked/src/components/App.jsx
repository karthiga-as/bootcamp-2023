import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [id, setId] = useState(1);

  function updateItem(event) {
    setNewItem(event.target.value);
  }

  function updateListArray() {
    setItemList([...itemList, { key: id, item: newItem }]);
    setNewItem("");
    setId(id + 1);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={updateItem} value={newItem} />
        <button onClick={updateListArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((items) => (
            <li key={items.id}>{items.item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
