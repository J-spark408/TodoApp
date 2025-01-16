import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoDefaultItem from "./TodoDefaultItem";

const BoardDiv = styled.div`
  width: 70%;
  margin: auto;
`;

const TodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 25px;
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
      </TodoDiv>
    </BoardDiv>
    //{listOfTodos.length !== 0 ? props.setDefaultBoard(true) : undefined}
  );
};

export default Board;
