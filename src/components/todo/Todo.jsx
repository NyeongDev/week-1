import React, { useState } from "react";
import "./style.css";

function Todo(props) {
  console.log("@프롭스@", props.title);
  return (
    <div className="todo">
      <h2>Working.. 🔥</h2>
      <div className="todo-item">
        <h2>{props.title}</h2>
        <div>{props.desc}</div>
        <div className="btn-container">
          <button className="delete-btn">삭제하기</button>
          <button className="complete-btn">완료</button>
        </div>
      </div>
      <div className="todo-item">
        <h2>{}</h2>
        <div>{}</div>
        <div className="btn-container">
          <button className="delete-btn">삭제하기</button>
          <button className="complete-btn">완료</button>
        </div>
      </div>
      <h2>Done..! 🎉</h2>
      <div className="todo-item">
        <h2>리액트 공부하기</h2>
        <div>리액트 기초를 공부해봅시다.</div>
        <div className="btn-container">
          <button className="delete-btn">삭제하기</button>
          <button className="complete-btn">완료</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
