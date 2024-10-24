import React, { useState } from "react";

const TodoInput = (props) => {
  const [textInput, setTextInput] = useState("");

  return (
    <div>
      <input
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const updatedListOfTodos = [...props.listOfTodos, textInput];
          props.setListOfTodos(updatedListOfTodos);
          setTextInput("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
