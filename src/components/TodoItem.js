import React, { useState } from "react";

const TodoItem = (props) => {
  const [toggleButton, setToggleButton] = useState(false);
  const [crossedOff, setCrossedOff] = useState(false);
  const [todoUndo, setTodoUndo] = useState(false);
  const [editTodo, setEditTodo] = useState(props.text);
  const [isEditting, setIsEditting] = useState(false);
  //const [newTodo, setNewTodo] = useState("");

  return (
    <li
      onClick={() => {
        setEditTodo(props.text);
        {
          isEditting ? undefined : setToggleButton(!toggleButton);
        }
      }}
    >
      {isEditting ? (
        <>
          <input
            value={editTodo}
            onChange={(e) => {
              setEditTodo(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              if (editTodo.length === 0) {
                alert("Text is empty");
                return false;
              } else {
                props.onEdit(props.id, editTodo);
                setIsEditting(false);
              }
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              setIsEditting(false);
              setEditTodo(props.text);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <p
          style={{
            textDecoration: crossedOff ? "line-through" : "none",
          }}
        >
          {props.text}
        </p>
      )}
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
      {toggleButton && !crossedOff ? (
        <button
          onClick={() => {
            setIsEditting(true);
          }}
        >
          Edit
        </button>
      ) : undefined}
      {toggleButton ? (
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          Delete
        </button>
      ) : undefined}
    </li>
  );
};

export default TodoItem;
