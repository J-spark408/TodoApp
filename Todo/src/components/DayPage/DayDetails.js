import React, { useEffect, useState } from "react";
import DayHeader from "./DayHeader";
import styled from "styled-components";
import axiosInstance from "../../../utils/axiosInstance";
import DayInfoHolder from "./DayInfoHolder";

const Container = styled.div`
  margin-left: 1em;
  margin-bottom: 1em;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  background-image: linear-gradient(to bottom right, #fdfcfb, #e2d1c3);
`;

const DayDetails = () => {
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

  // need to sort event.createdOn into useState and render to DayHeader as Date={sortedDate}
  useEffect(() => {
    getAllEvents();
    return () => {};
  }, []);

  return getEvent.map((event) => (
    <Container>
      <DayHeader date={event.createdOn} />
      <DayInfoHolder
        key={event._id}
        title={event.title}
        content={event.content}
        tags={event.tags}
      />
    </Container>
  ));
};

export default DayDetails;
