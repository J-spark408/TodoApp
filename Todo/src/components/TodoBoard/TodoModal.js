import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoCloseOutline, IoCloseSharp } from "react-icons/io5";
import axiosInstance from "../../../utils/axiosInstance";
import DateHandler from "./DateHandler";
import moment from "moment";
import Modal from "react-modal";

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
    border-color: rgb(255, 153, 0);
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

const IconButton = styled.button`
  background: transparent;
  border: none;
  font-size: 22px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  color: ${({ color }) => color || "#555"};

  &.close-icon {
    float: right;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const TodoModal = ({
  mode = "create",
  initialValues = {},
  onSuccess,
  showModal,
  setShowModal,
}) => {
  const [title, setTitle] = useState(initialValues.title || "");
  const [content, setContent] = useState(initialValues.content || "");
  const [date, setDate] = useState(
    initialValues.event_date || moment().format("YYYY-MM-DD")
  );
  //const [editing, setEditing] = useState(initialValues.showModal || false);
  const [closeHovered, setCloseHovered] = useState(false);
  const [error, setError] = useState("");

  const isEdit = mode === "edit";

  const handleSubmit = async () => {
    if (!title) return setError("Please enter a title.");
    if (!content) return setError("Please enter content.");
    setError("");

    try {
      if (isEdit) {
        const response = await axiosInstance.put(
          `/event/edit-event/${initialValues.id}`,
          {
            title: title.toUpperCase(),
            content,
            createdOn: date,
          }
        );
        if (response.data && response.data.event) {
          onSuccess?.();
        }
      } else {
        const response = await axiosInstance.post("/event/new-event", {
          title: title.toUpperCase(),
          content,
          createdOn: date,
        });
        if (response.data && response.data.event) {
          onSuccess?.();
        }
      }
    } catch (error) {
      setError(error.response?.data?.message || "Unexpected error occurred.");
    }
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <IconButton
        title="Close"
        className="close-icon"
        onClick={() => setShowModal(false)}
        onMouseEnter={() => setCloseHovered(true)}
        onMouseLeave={() => setCloseHovered(false)}
      >
        {closeHovered ? <IoCloseOutline /> : <IoCloseSharp />}
      </IconButton>
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
          <DateHandler date={date} setDate={setDate} isEdit={isEdit} />
        </PlaceLabelDiv>

        {error && <ErrorText>{error}</ErrorText>}

        <Button onClick={handleSubmit}>
          {isEdit ? "Update Event" : "Add Event"}
        </Button>
      </Container>
    </Modal>
  );
};

export default TodoModal;
