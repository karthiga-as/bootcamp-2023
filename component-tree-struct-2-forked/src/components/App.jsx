import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(1);

  function addItem(inputText) {
    setItems([...items, { key: id, item: inputText }]);
    setId(id + 1);
  }

  function deleteItem(id) {
    setItems((items) => {
      return items.filter((item) => item.key !== id);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onClick={addItem} />
      <div>
        <ul>
          {items.map((item) => (
            <ToDoItem
              key={item.key}
              id={item.key}
              text={item.item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
