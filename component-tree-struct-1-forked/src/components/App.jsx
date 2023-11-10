import React, { useState } from "react";
import TodoListItem from "./ToDoListItem";

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

  function deleteArrayList(id) {
    setItemList(itemList.filter((item) => item.key !== id));
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
        {itemList.map((items) => (
          <TodoListItem
            key={items.key}
            index={items.key}
            item={items.item}
            onChecked={deleteArrayList}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
