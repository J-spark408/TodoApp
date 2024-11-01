import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  //const [todos, setTodos] = useState(props.todoArray);
  console.log(props.todoArray);
  const handleDelete = (id) => {
    const newTodos = props.todoArray.filter((item, index) => index !== id);
    props.setListOfTodos(newTodos);
  };

  const handleUpdate = (id, newText) => {
    const updateTodos = props.todoArray.map((item, index) =>
      index === id ? newText : item
    );
    props.setListOfTodos(updateTodos);
  };

  return (
    <ul>
      {props.todoArray.map((item, index) => {
        return (
          <TodoItem
            key={index}
            text={item}
            id={index}
            //id={props.todoArray.indexOf(item)}
            array={props.todoArray}
            onDelete={handleDelete}
            onEdit={handleUpdate}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
