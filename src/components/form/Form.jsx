import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import List from "../list/List";
import "./style.css";

function Form() {
  const [todos, setTodos] = useState([]); //복수
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleChangeDesc = e => {
    setDesc(e.target.value);
  };

  function submitHandler() {
    const uniqueId = uuid();
    const temp = { id: uniqueId, title: title, desc: desc, isDone: false };
    setTodos([temp, ...todos]);
    setTitle("");
    setDesc("");
  }

  function handleDelete(id) {
    const res = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(res);
  }

  return (
    <div>
      <div className="form">
        <div className="input-group">
          <label>제목</label>
          <input onChange={handleChangeTitle} value={title}></input>
          <label>내용</label>
          <input onChange={handleChangeDesc} value={desc}></input>
        </div>
        <button className="add-button" onClick={submitHandler}>
          추가하기
        </button>
      </div>
      <List todos={todos} handleDelete={handleDelete} setTodos={setTodos} />
    </div>
  );
}

export default Form;

// 리스트 추가 방법
// 1) push
// 2) setToDo([...toDo, temp]);
// 3) setToDo((prev) => {
// return [...prev, temp];
// });

// input 에 엔터 기능 달기
// // 엔터 기능
// const onKeyPress = (e) => {
// if (e.key === "Enter") {
// 함수();
// }
// };

// function isDoneHandler(idx) {
//   // 위치 찾기
//   let temp = toDo[idx];
//   // 객체 isDone 을 false 에서 true 로 바꾸기
//   temp = { ...temp, isDone: true };
//   // splice 는 replace 해줌
//   // idx 위치에 1개의 temp 를 replace 해줌
//   todo.splice(idx, 1, temp);
//   // 최종 바뀐 todo 를 setTodo 로 보내줌
//   setToDo(todo);
// }
