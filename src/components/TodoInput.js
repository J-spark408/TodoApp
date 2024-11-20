import React, { useState } from "react";
import styled from "styled-components";
import TodoDefaultItem from "./TodoDefaultItem";

const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 0.1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  margin-bottom: 2em;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px pink;
  }
`;

const Input = styled.input`
  color: rgba(0, 0, 0, 0.87);
  border-bottom-color: rgba(0, 0, 0, 0.42);
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
  text-decoration: inherit;
  text-transform: inherit;
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 16px 6px;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-bottom: 1px solid;
  border-radius: 4px 4px 0 0;
  background: rgb(245, 245, 245);
  height: 56px;
  :hover {
    border-bottom-color: rgba(0, 0, 0, 0.87);
    background: #ececec;
  }
  :focus {
    border-color: #6200ee;
  }
`;

const InputDiv = styled.div`
  width: 90%;
`;

const TodoInput = (props) => {
  const [textInput, setTextInput] = useState("");
  //const [duplicatedAlert, setDuplicatedAlert] = useState(false);

  const handleAddTodo = () => {
    if (textInput.length === 0) {
      alert("Text is empty");
      return false;
    } else {
      props.setTodoAdded(true);
      const updatedListOfTodos = [...props.listOfTodos, textInput];
      const filterArray = updatedListOfTodos.filter(
        (item, index) => updatedListOfTodos.indexOf(item) === index
      );
      if (updatedListOfTodos.length !== filterArray.length) {
        props.setAlert(true);
      }
      props.setListOfTodos(filterArray);
      setTextInput("");
    }
  };

  return (
    <InputDiv>
      <Input
        value={textInput}
        placeholder={props.alert ? "Todo Already Exists!" : ""}
        onClick={() => props.setAlert(false)}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
      />
      <Button
        onClick={() => {
          handleAddTodo();
        }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          setTextInput("");
        }}
      >
        Delete
      </Button>
    </InputDiv>
  );
};

export default TodoInput;
