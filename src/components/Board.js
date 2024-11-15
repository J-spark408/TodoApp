import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoDefaultItem from "./TodoDefaultItem";

const BoardDiv = styled.div`
  background: Azure;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const Board = () => {
  const [listOfTodos, setListOfTodos] = useState([]);
  const [todoAdded, setTodoAdded] = useState(false);
  const [duplicatedAlert, setDuplicatedAlert] = useState(false);

  return (
    <BoardDiv className="TodoBoard">
      <Header />
      <TodoInput
        listOfTodos={listOfTodos}
        setListOfTodos={setListOfTodos}
        setTodoAdded={setTodoAdded}
        alert={duplicatedAlert}
        setAlert={setDuplicatedAlert}
      />
      <TodoDefaultItem
        listOfTodos={listOfTodos}
        setListOfTodos={setListOfTodos}
        todoAdded={todoAdded}
        setTodoAdded={setTodoAdded}
        alert={duplicatedAlert}
        setAlert={setDuplicatedAlert}
      />
      <TodoList todoArray={listOfTodos} setListOfTodos={setListOfTodos} />
    </BoardDiv>
    //{listOfTodos.length !== 0 ? props.setDefaultBoard(true) : undefined}
  );
};

export default Board;
