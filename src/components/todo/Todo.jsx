import React from "react";
import "./style.css";

function Todo(props) {
  const { id, title, desc, isDone } = props;
  const handleDelete = props.handleDelete;
  const handleIsDone = props.handleIsDone;
  return (
    <>
      <div className="todo-item">
        <h2>{title}</h2>
        <div>{desc}</div>
        <div className="btn-container">
          <button onClick={() => handleDelete(id)} className="delete-btn">
            삭제
          </button>
          <button
            onClick={() => {
              handleIsDone(id);
            }}
            className={isDone ? "cancel-btn" : "complete-btn"}
          >
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
