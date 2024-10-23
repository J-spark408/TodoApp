import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.todoArray.map((item) => {
        return <TodoItem text={item} />;
      })}
    </ul>
  );
};

export default TodoList;
