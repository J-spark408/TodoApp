import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axiosInstance from "../../../utils/axiosInstance";
import DayInfoHolder from "./DayInfoHolder";
import moment from "moment";

const Container = styled.div`
  width: 80%;
  padding: 0.1em;
  margin-left: 0.5em;
  background: #fff;
  border-radius: 1px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
`;

const NoUpcomingText = styled.p`
  color: gray;
  margin-left: 1em;
  font-family: cursive;
`;

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
        <NoUpcomingText>No Upcoming Event</NoUpcomingText>
      )}
    </Container>
  );
};

export default DayDetails;
