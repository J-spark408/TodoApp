import React, { useState } from "react";

const TodoItem = (props) => {
  const [toggleButton, setToggleButton] = useState(false);
  const [crossedOff, setCrossedOff] = useState(false);
  const [todoUndo, setTodoUndo] = useState(false);
  //const [editTodo, setEditTodo] = useState(props.text);
  //const [todoValue, setTodoValue] = useState("");

  return (
    <li
      onClick={() => {
        setToggleButton(!toggleButton);
      }}
    >
      <p
        style={{
          textDecoration: crossedOff ? "line-through" : "none",
        }}
      >
        {props.text}
      </p>
      {toggleButton ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCrossedOff(!crossedOff);
            setTodoUndo(!todoUndo);
          }}
        >
          {todoUndo ? "Undo" : "Done"}
        </button>
      ) : undefined}
      {toggleButton && !crossedOff ? <button>Edit</button> : undefined}
      {toggleButton ? (
        <button
          onClick={(e) => {
            {
              props.listOfTodos.splice(props.todoIndex, 1);
            }
          }}
        >
          Delete
        </button>
      ) : undefined}
    </li>
  );
};

export default TodoItem;
