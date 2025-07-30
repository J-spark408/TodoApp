import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DayHeader from "../HomePage/DayHeader";
import axiosInstance from "../../../utils/axiosInstance";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TodoModal from "../TodoBoard/TodoModal";

const Container = styled.div`
  margin-left: 5em;
  height: 100% auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80vh;
`;

const InfoContainer = styled.div`
  max-width: 600px;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #0056b3, #003d80);
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
`;

const AddNewEventBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 14px 24px;
  background: linear-gradient(
    135deg,
    rgb(255, 147, 47) 0%,
    rgb(254, 179, 38) 100%
  );
  color: white;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [getEvent, setGetEvent] = useState([]);
  const [currentWeek, setCurrentWeek] = useState(moment().startOf("week"));
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  //const { loggedIn } = useSelector((state) => state.user);

  const getAllEvents = async () => {
    try {
      const response = await axiosInstance.get("/event/get-events");
      if (response.data && response.data.events) {
        setGetEvent(response.data.events);
      }
    } catch (error) {
      console.log("Unexpected error");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
      getAllEvents();
    }
  }, []);

  return (
    <Container className="DetailContainer">
      {loggedIn ? (
        <>
          <DayHeader
            getEvent={getEvent}
            refreshEvents={getAllEvents}
            currentWeek={currentWeek}
            setCurrentWeek={setCurrentWeek}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <AddNewEventBtn onClick={() => setShowModal(true)}>
            Add Event
          </AddNewEventBtn>
        </>
      ) : (
        <InfoContainer>
          <Title>Welcome to Event Manager</Title>
          <Description>
            Organize and track your events effortlessly. Stay on top of your
            schedule and manage tasks with ease.
          </Description>
          <Button onClick={() => navigate("/login")}>Get Started</Button>
        </InfoContainer>
      )}
      {showModal && (
        <TodoModal
          mode="create"
          shouldCloseOnOverlayClick={false}
          showModal={showModal}
          setShowModal={setShowModal}
          initialValues={{
            id: getEvent._id,
            title: getEvent.title,
            content: getEvent.content,
            event_date: getEvent.createdOn,
          }}
          onSuccess={() => {
            setShowModal(false);
            getAllEvents();
          }}
        />
      )}
    </Container>
  );
};

export default HomePage;
