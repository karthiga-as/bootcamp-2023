import React from "react";

export default function TodoListItem(props) {
  //state is localized only to this component
  //const [click, setClick] = useState(false);
  /*function updateClick() {
    setClick((prevVal) => !prevVal);
  }*/
  // on lick and on doubleClick Function
  /*function doubleClick() {
    setClick(false);
  }
  return (
    <ul>
      <li
        onClick={updateClick}
        onDoubleClick={doubleClick}
        style={{ textDecoration: click ? "line-through" : "none" }}
        key={props.key}
      >
        {props.item}
      </li>
    </ul>
  );*/
  /* with click functionality
  return (
    <ul>
      <li
        onClick={updateClick}
        style={{ textDecoration: click ? "line-through" : "none" }}
        key={props.key}
      >
        {props.item}
      </li>
    </ul>
  );*/

  return (
    <ul>
      <li
        key={props.index}
        onClick={() => {
          props.onChecked(props.index);
        }}
      >
        {props.item}
      </li>
    </ul>
  );
}
