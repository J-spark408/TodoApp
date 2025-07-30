import React from "react";
import styled from "styled-components";
import DayInfoHolder from "./DayInfoHolder";
import moment from "moment";
import { MdEventBusy } from "react-icons/md"; // Icon for No Upcoming Events

const Container = styled.div`
  width: 85%;
  max-width: 800px;
  background: linear-gradient(135deg, #ffffff 0%, #f3f3f3 100%);
  border-radius: 12px;
  padding: 20px;
  margin: 20px auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: #00796b;
  font-family: "Poppins", sans-serif;
  margin-bottom: 12px;
`;

const NoUpcomingContainer = styled.div`
  text-align: center;
  color: #888;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin-top: 10px;
  padding: 15px;
`;

const NoUpcomingIcon = styled(MdEventBusy)`
  font-size: 40px;
  color: #b0bec5;
  margin-bottom: 8px;
`;

const DayDetails = ({ day, getEvent, refreshEvents }) => {
  const filteredEvents = getEvent.filter(
    (event) => day === moment(event.createdOn).format("MMMM DD, YYYY"),
  );

  return (
    <Container>
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <DayInfoHolder
            key={index}
            event={event}
            title={event.title}
            content={event.content}
            tags={event.tags}
            event_date={event.createdOn}
            isPinned={event.isPinned}
            refreshEvents={refreshEvents}
          />
        ))
      ) : (
        <NoUpcomingContainer>
          <NoUpcomingIcon />
          <p>No Events</p>
        </NoUpcomingContainer>
      )}
    </Container>
  );
};

export default DayDetails;
