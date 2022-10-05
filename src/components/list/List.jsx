import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List(props) {
  const { todos, handleDelete, setTodos } = props;

  function handleIsDone(id) {
    const res = todos.filter(todo => {
      return todo.id === id;
    });
    res[0].isDone = !res[0].isDone; //배열에서 객체를 빼오는 방법->어차피 하나임
    // 필터로 걸러진 객체 + 기존에 있던 배열
    const updateTodo = res[0];
    const todosNotFiltered = todos.filter(todo => {
      return todo.id !== id;
    });
    todosNotFiltered.push(updateTodo);
    setTodos(todosNotFiltered);
  }

  // filter를 먼저 해서 분리된 배열을 map으로 찍어줘야 함!!
  const filteredFalse = todos.filter(todo => todo.isDone === false);
  const filteredTrue = todos.filter(todo => todo.isDone === true);
  return (
    <>
      <h2>Working.. 🔥</h2>
      <div className="cardBox">
        {filteredFalse.map(todo => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              desc={todo.desc}
              isDone={todo.isDone}
              handleDelete={handleDelete}
              handleIsDone={handleIsDone}
            />
          );
        })}
      </div>

      <h2>Done..! 🎉</h2>
      <div className="cardBox">
        {filteredTrue.map(todo => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              desc={todo.desc}
              isDone={todo.isDone}
              handleDelete={handleDelete}
              handleIsDone={handleIsDone}
            />
          );
        })}
      </div>
    </>
  );
}

export default List;
