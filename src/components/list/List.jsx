import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List(props) {
  console.log("@리스트@", props);
  return (
    <div className="list-container">
      <Todo title={props.title} desc={props.desc} />
    </div>
  );
}

export default List;
