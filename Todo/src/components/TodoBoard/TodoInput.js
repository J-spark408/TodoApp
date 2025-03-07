import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import DateHandler from "./DateHandler";
import moment from "moment";

const Container = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const PlaceLabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1rem;
`;

const PlaceLabel = styled.label`
  font-weight: 600;
  color: #555;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color:rgb(255, 153, 0);
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    background: #fff;
  }
`;

const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  outline: none;
  resize: vertical;
  min-height: 80px;
  transition: 0.3s;

  &:focus {
    border-color: rgb(255, 153, 0);
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    background: #fff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: rgb(255, 153, 0);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-top: 10px;

  &:hover {
    background: rgba(255, 153, 0, 0.72);
    box-shadow: 0 4px 8px rgba(0, 91, 187, 0.2);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 8px;
`;

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleAddEvent = async () => {
    if (!title) {
      setError("Please enter a title.");
      return;
    }
    if (!content) {
      setError("Please enter content.");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post("/event/new-event", {
        title: title.toUpperCase(),
        content,
        createdOn: date,
      });

      if (response.data && response.data.event) {
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Unexpected error occurred. Please try again.");
    }
  };

  return (
    <Container>
      <PlaceLabelDiv>
        <PlaceLabel>Title</PlaceLabel>
        <Input
          type="text"
          placeholder="Enter a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </PlaceLabelDiv>
      
      <PlaceLabelDiv>
        <PlaceLabel>Content</PlaceLabel>
        <TextArea
          placeholder="Enter details..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </PlaceLabelDiv>
      
      <PlaceLabelDiv>
        <PlaceLabel>Choose Date</PlaceLabel>
        <DateHandler date={date} setDate={setDate} />
      </PlaceLabelDiv>

      {error && <ErrorText>{error}</ErrorText>}

      <Button onClick={handleAddEvent}>Add Event</Button>
    </Container>
  );
};

export default TodoInput;
