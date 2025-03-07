import React from "react";
import moment from "moment";
import styled from "styled-components";
import DayDetails from "../DayPage/DayDetails";

const HeaderContainer = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 20px auto;
  padding: 16px;
  background-color: orange;
  color: white;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
`;

const DayWrapper = styled.div`
  margin-top: 20px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

const DayTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const DayHeader = ({ weeklyView, getEvent, refreshEvents }) => {
  const today = new Date();
  const SevenDays = Array.from({ length: 7 }, (_, i) => {
    let newDate = new Date();
    newDate.setDate(today.getDate() + i);
    return newDate;
  });

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  const WeeklyDays = Array.from({ length: 7 }, (_, i) => {
    let newDate = new Date();
    newDate.setDate(startOfWeek.getDate() + i);
    return newDate;
  });

  const formatDay = (date) =>
    date.toLocaleDateString("en-US", { weekday: "long" });
  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  const renderDays = (days) =>
    days.map((day, index) => (
      <DayWrapper key={index}>
        <DayTitle>
          {formatDate(day) === moment(today).format("MMMM DD, YYYY")
            ? "Today"
            : `${formatDay(day)}, ${formatDate(day)}`}
        </DayTitle>
        <DayDetails
          day={formatDate(day)}
          getEvent={getEvent}
          refreshEvents={refreshEvents}
        />
      </DayWrapper>
    ));

  return (
    <HeaderContainer>
      <h2>Upcoming Events</h2>
      {weeklyView === "7-Days" ? renderDays(SevenDays) : renderDays(WeeklyDays)}
    </HeaderContainer>
  );
};

export default DayHeader;
