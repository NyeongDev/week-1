import React, { useState } from "react";
import List from "../list/List";
import "./style.css";

function Form() {
  const [toDo, setToDo] = useState({});
  const [title, setTitle] = useState("제목");
  const [desc, setDesc] = useState("설명");

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleChangeDesc = e => {
    setDesc(e.target.value);
  };

  console.log("@title@", title);
  console.log("@desc@", desc);

  function onClickHandler() {
    setToDo({
      title: title,
      desc: desc,
    });
  }
  console.log("@todo@", toDo);

  return (
    <div>
      <div className="form">
        <div className="input-group">
          <label>제목</label>
          <input onChange={handleChangeTitle} value={title}></input>
          <label>내용</label>
          <input onChange={handleChangeDesc} value={desc}></input>
        </div>
        <button onClick={onClickHandler}>추가하기</button>
      </div>
      <List title={title} desc={desc} />
    </div>
  );
}

export default Form;
