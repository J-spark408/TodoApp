import React, { useState } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";

const Board = () => { 
  const [listOfTodos, setListOfTodos] = useState(["Blue", "Red", "White"]);
  return (
    <div>
      <Header />
      <TodoInput listOfTodos={listOfTodos} setListOfTodos={setListOfTodos}/>
      <TodoList todoArray={listOfTodos}/>
    </div>
  );
};

export default Board;
