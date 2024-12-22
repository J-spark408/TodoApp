import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoDefaultItem from "./TodoDefaultItem";

const BoardDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  margin-left: 5em;
`;

const TodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const Board = () => {
  const [listOfTodos, setListOfTodos] = useState([]);
  const [todoAdded, setTodoAdded] = useState(false);
  const [duplicatedAlert, setDuplicatedAlert] = useState(false);

  return (
    <BoardDiv>
      <TodoDiv className="TodoBoard">
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
      </TodoDiv>
    </BoardDiv>
    //{listOfTodos.length !== 0 ? props.setDefaultBoard(true) : undefined}
  );
};

export default Board;
