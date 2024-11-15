import React, { useState } from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";

const DefaultItemBox = styled.ol`
  column-count: 3;
  list-style-type: none;
`;

const DefaultItemList = styled.li`
  padding: 0.5em;
`;

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

const CheckBox = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

const DefaultText = styled.div`
  font-size: 18px;
`;

const TodoDefaultItem = (props) => {
  const defaultTodos = [
    "Do the Laundry",
    "Get Grocery",
    "Go to the Gym",
    "Work on project",
    "Eat Healthy",
    "Meditate for 10 minutes",
    "Read a book",
    "Clean the house",
    "Pay bills",
  ];

  const [todoText, setTodoText] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  //const [duplicatedAlert, setDuplicatedAlert] = useState(false);

  function uncheckAll() {
    let inputs = document.querySelectorAll(".checkbox");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
  }

  const handleAddTodoToList = () => {
    const mergeArray = props.listOfTodos.concat(todoText);
    const filterArray = mergeArray.filter(
      (item, index) => mergeArray.indexOf(item) === index
    );
    if (mergeArray.length !== filterArray.length) {
      props.setAlert(true);
    }
    props.setListOfTodos(filterArray);
    setTodoText([]);
  };

  const addTodoInCheckBox = (item) => {
    const addTodo = [...todoText, item];
    setTodoText(addTodo);
  };

  const undoAddInCheckBox = (item, id) => {
    for (let i = 0; i < todoText.length; i++) {
      if (item === todoText[i]) {
        const deleteIndex = i;
        const undoAdd = todoText.filter((item, index) => index !== i);
        setTodoText(undoAdd);
      }
    }
  };

  return (
    <>
      <DefaultItemBox>
        {defaultTodos.map((item, index, id) => {
          return (
            <DefaultItemList key={index}>
              <label
                style={{
                  display: "flex",
                }}
                className="mylabel"
              >
                <CheckBox
                  className="checkbox"
                  id={`checkbox_${index}`}
                  type="checkbox"
                  name="checkbox"
                  onClick={(e) => {
                    props.setAlert(false);
                    const checkedItem = document.getElementById(
                      `checkbox_${index}`
                    );
                    if (checkedItem.checked) {
                      addTodoInCheckBox(item);
                    } else {
                      undoAddInCheckBox(item, index);
                    }
                  }}
                />
                <DefaultText className="mylabel">{item}</DefaultText>
              </label>
            </DefaultItemList>
          );
        })}
      </DefaultItemBox>
      <Button
        onClick={() => {
          props.setTodoAdded(true);
          handleAddTodoToList();
          setIsChecked(false);
          uncheckAll();
        }}
      >
        Add Todo
      </Button>
    </>
  );
};

export default TodoDefaultItem;
