import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  padding: 30px;
  box-shadow: rgba(255, 150, 100) 0px 0px 0px 3px;
`;

const Board = () => {
  const [listOfTodos, setListOfTodos] = useState([]);
  const [todoAdded, setTodoAdded] = useState(false);
  const [duplicatedAlert, setDuplicatedAlert] = useState(false);

  return (
    <BoardWrapper>
      <BoardContainer>
        <Header />
        <TodoInput
          listOfTodos={listOfTodos}
          setListOfTodos={setListOfTodos}
          setTodoAdded={setTodoAdded}
          alert={duplicatedAlert}
          setAlert={setDuplicatedAlert}
        />
      </BoardContainer>
    </BoardWrapper>
  );
};

export default Board;
