import React, { useState } from "react";
import styled from "styled-components";
import { TbPinned, TbPinnedFilled } from "react-icons/tb";
import { RiFileEditLine, RiFileEditFill } from "react-icons/ri";
import { MdDeleteOutline, MdDelete } from "react-icons/md";
import axiosInstance from "../../../utils/axiosInstance";
import TodoModal from "../TodoBoard/TodoModal";
import moment from "moment";

const Container = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin: 10px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleText = styled.h3`
  font-size: 20px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  margin: 0;
  color: #333;
`;

const DetailText = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-top: 2em;
  margin-left: 1em;
  color: #555;
  white-space: pre-wrap;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;

const Tag = styled.span`
  background: #e0f7fa;
  color: #00796b;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #ddd;
  margin: 12px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
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

const DayInfoHolder = ({
  refreshEvents,
  event,
  title,
  content,
  tags,
  isPinned,
  event_date,
}) => {
  const [editHovered, setEditHovered] = useState(false);
  const [deleteHovered, setDeleteHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const deleteEvent = async () => {
    try {
      const response = await axiosInstance.delete(
        `/event/delete-event/${event._id}`
      );
      if (response.data && !response.data.error) {
        refreshEvents();
        console.log(`${event._id} is deleted`);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const togglePinned = async () => {
    try {
      const response = await axiosInstance.put(
        `/event/update-event-pinned/${event._id}`,
        {
          isPinned: !event.isPinned,
        }
      );
      if (response.data && response.data.event) {
        refreshEvents();
        console.log("Pinned status updated");
      }
    } catch (error) {
      console.error("Error updating pin status:", error);
    }
  };

  return (
    <Container>
      <Header>
        <TitleText>{title}</TitleText>
        <IconButton
          onClick={togglePinned}
          title={isPinned ? "Unpin" : "Pin"}
          color={isPinned ? "#ff9800" : "#555"}
        >
          {isPinned ? <TbPinnedFilled /> : <TbPinned />}
        </IconButton>
      </Header>

      <DetailText>{content}</DetailText>

      {tags && tags.length > 0 && (
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
      )}

      <Divider />

      <ButtonGroup>
        <IconButton
          title="Edit"
          onClick={() => setShowModal(true)}
          onMouseEnter={() => setEditHovered(true)}
          onMouseLeave={() => setEditHovered(false)}
          color="#1976d2"
        >
          {editHovered ? <RiFileEditFill /> : <RiFileEditLine />}
        </IconButton>
        <IconButton
          title="Delete"
          onClick={deleteEvent}
          onMouseEnter={() => setDeleteHovered(true)}
          onMouseLeave={() => setDeleteHovered(false)}
          color="#d32f2f"
        >
          {deleteHovered ? <MdDelete /> : <MdDeleteOutline />}
        </IconButton>
      </ButtonGroup>

      {showModal && (
        <TodoModal
          mode="edit"
          shouldCloseOnOverlayClick={false}
          showModal={showModal}
          setShowModal={setShowModal}
          initialValues={{
            id: event._id,
            title,
            content,
            event_date,
          }}
          onSuccess={() => {
            setShowModal(false);
            refreshEvents();
          }}
        />
      )}
    </Container>
  );
};

export default DayInfoHolder;
