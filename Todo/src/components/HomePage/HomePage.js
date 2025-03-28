import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DayHeader from "../HomePage/DayHeader";
import axiosInstance from "../../../utils/axiosInstance";
import moment from "moment";

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

const HomePage = () => {
  const [getEvent, setGetEvent] = useState([]);
  const [currentWeek, setCurrentWeek] = useState(moment().startOf("week"));

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
    getAllEvents();
  }, [currentWeek]);

  return (
    <Container className="DetailContainer">
      <DayHeader
        getEvent={getEvent}
        refreshEvents={getAllEvents}
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
    </Container>
  );
};

export default HomePage;
