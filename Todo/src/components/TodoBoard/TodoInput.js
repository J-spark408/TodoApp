import React, { useState } from "react";
import styled from "styled-components";
import TodoDefaultItem from "./TodoDefaultItem";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import DateHandler from "./DateHandler";

const Container = styled.div``;

const PlaceLabel = styled.label`
  color: gray;
`;

const Button = styled.button`
  width: 100%;
  color: #bf4f74;
  font-size: 1em;
  margin-top: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px pink;
  }
`;

const PlaceLabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgb(2 6 23 / var(--tw-text-opacity, 1));
  border: none;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity, 1));
`;

const TextArea = styled.textarea`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(2 6 23 / var(--tw-text-opacity, 1));
  border: none;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity, 1));
  padding: 0.5rem;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  color: red;
`;

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  //const [duplicatedAlert, setDuplicatedAlert] = useState(false);

  const handleAddEvent = async (e) => {
    if (!title) {
      setError("Fill out the title");
      return;
    }
    if (!content) {
      setError("Fill out the content");
      return;
    }
    if (!date) {
      setError("Choose a date");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post("/event/new-event", {
        title: title,
        content: content,
        createdOn: date,
      });

      if (response.data && response.data.event) {
        navigate("/");
        return;
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Unexpected error occured. Please try again");
      }
    }
  };

  // const handleAddTodo = () => {
  //   if (textInput.length === 0) {
  //     alert("Text is empty");
  //     return false;
  //   } else {
  //     props.setTodoAdded(true);
  //     const updatedListOfTodos = [...props.listOfTodos, textInput];
  //     const filterArray = updatedListOfTodos.filter(
  //       (item, index) => updatedListOfTodos.indexOf(item) === index
  //     );
  //     if (updatedListOfTodos.length !== filterArray.length) {
  //       props.setAlert(true);
  //     }
  //     props.setListOfTodos(filterArray);
  //     setTextInput("");
  //   }
  // };

  return (
    <Container>
      <PlaceLabelDiv>
        <PlaceLabel>Title</PlaceLabel>
        <Input
          type="text"
          placeholder="Add Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </PlaceLabelDiv>
      <PlaceLabelDiv>
        <PlaceLabel>Content</PlaceLabel>
        <TextArea
          placeholder="Add Subject"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </PlaceLabelDiv>
      <PlaceLabelDiv>
        <PlaceLabel>Choose Date</PlaceLabel>
        <DateHandler setDate={setDate} />
      </PlaceLabelDiv>
      {error && <ErrorText>{error}</ErrorText>}
      <Button
        onClick={() => {
          handleAddEvent();
        }}
      >
        Add Event
      </Button>
    </Container>
  );
};

export default TodoInput;
