import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DayHeader from "../HomePage/DayHeader";
import ViewOption from "./ViewOption";
import axiosInstance from "../../../utils/axiosInstance";
import { Link } from "react-router-dom";


// Dummy function to check authentication status
const isAuthenticated = () => {
  return localStorage.getItem("token"); // Check if a token exists
};

const Container = styled.div`
  margin-left: 5em;
  height: 100% auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const DescriptionContainer = styled.div`
  max-width: 700px;
  margin: 5em auto;
  padding: 20px;
  text-align: center;
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: rgb(255, 153, 0);
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-top: 10px;
  line-height: 1.6;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: rgb(255, 153, 0);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 153, 0, 0.8);
  }
`;

const AddEventButton = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background:rgb(255, 145, 94);
  color: white;
  padding: 16px 24px;
  font-size: 1.5rem;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  text-decoration: none;

  &:hover {
    background: linear-gradient(45deg, #ff6b6b, #ff8e53);
    transform: scale(1.1);
    box-shadow: 0px 3px 12px rgba(255, 107, 107, 0.5);
  }
`;

const HomePage = () => {
  const [weeklyView, setWeeklyView] = useState("Weekly");
  const [getEvent, setGetEvent] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

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
    if (isLoggedIn) {
      getAllEvents();
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <Container className="DetailContainer">
          <ViewOption
            refreshEvents={getAllEvents}
            weeklyView={weeklyView}
            setWeeklyView={setWeeklyView}
          />
          <DayHeader weeklyView={weeklyView} getEvent={getEvent} refreshEvents={getAllEvents} />
        </Container>
      ) : (
        <DescriptionContainer>
          <Title>Welcome to Event Planner</Title>
          <Description>
            Organize your events efficiently with our event planner. Schedule, track, and manage
            your week all in one place.
          </Description>
          <Button onClick={() => (window.location.href = "/login")}>Get Started</Button>
        </DescriptionContainer>
      )}

      {/* Add Event Button */}
      {isLoggedIn && (
        <AddEventButton to="/add-new-event">
          +
        </AddEventButton>
      )}
    </>
  );
};

export default HomePage;
