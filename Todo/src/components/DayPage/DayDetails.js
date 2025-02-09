import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axiosInstance from "../../../utils/axiosInstance";
import DayInfoHolder from "./DayInfoHolder";
import moment from "moment";

const Container = styled.div`
  margin-left: 1em;
  margin-bottom: 1em;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  background-image: linear-gradient(to bottom right, #fdfcfb, #e2d1c3);
`;

const EventContainer = styled.div`
  margin: 1em;
  width: 95%;
  padding: 10px;
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const TitleText = styled.p`
  font-weight: bold;
`;

const DetailText = styled.p``;

const DayDetails = ({ day }) => {
  const [getEvent, setGetEvent] = useState([]);
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
    return () => {};
  }, []);

  const filteredEvents = getEvent.filter(
    (event) => day === moment(event.createdOn).format("MMMM DD, YYYY")
  );

  return (
    <Container>
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <DayInfoHolder
            key={index}
            title={event.title}
            content={event.content}
            tags={event.tags}
          />
        ))
      ) : (
        <p>No Upcoming Event</p>
      )}
    </Container>
  );
};

export default DayDetails;
