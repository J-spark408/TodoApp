import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.todoArray.map((item, index) => {
        return <TodoItem text={item} todoIndex={index} />;
      })}
    </ul>
  );
};

export default TodoList;
