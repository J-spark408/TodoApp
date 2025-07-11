import React from "react";
import moment from "moment";
import styled from "styled-components";
import DayDetails from "../DayPage/DayDetails";

const HeaderContainer = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background: linear-gradient(135deg, #ff9800, #ffb74d);
  color: white;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease-in-out;
`;

const DayWrapper = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
`;

const DayTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;

  ${({ isToday }) =>
    isToday &&
    `
    font-size: 24px;
    color: #ff6d00;
    background: #fff4e0;
    padding: 8px 16px;
    border-radius: 10px;
    display: inline-block;
    box-shadow: 0px 3px 6px rgba(255, 153, 0, 0.4);
    animation: pulse 1.5s infinite alternate;

    @keyframes pulse {
      0% { transform: scale(1); }
      100% { transform: scale(1.05); }
    }
  `}
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  gap: 20px;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  background: linear-gradient(135deg, #ff9800, #ff6d00);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);

  &:hover {
    background: linear-gradient(135deg, #ff6d00, #ff9800);
    transform: translateY(-2px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const WeekRange = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  background: #ffffff;
  padding: 8px 14px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const DayHeader = ({
  getEvent,
  refreshEvents,
  currentWeek,
  setCurrentWeek,
}) => {
  const WeeklyDays = Array.from({ length: 7 }, (_, i) =>
    currentWeek.clone().add(i, "days")
  );

  const changeWeek = (offset) => {
    setCurrentWeek((prevWeek) => prevWeek.clone().add(offset, "weeks"));
  };

  const startOfWeek = currentWeek.clone().startOf("week").format("MM/DD/YYYY");
  const endOfWeek = currentWeek.clone().endOf("week").format("MM/DD/YYYY");

  const formatDay = (date) => date.format("dddd");
  const formatDate = (date) => date.format("MMMM DD, YYYY");

  const renderDays = (days) =>
  days.map((day, index) => {
    const isToday = day.isSame(moment(), "day");
    return (
      <DayWrapper key={index}>
        <DayTitle>
          {isToday ? "Today" : `${formatDay(day)}, ${formatDate(day)}`}
        </DayTitle>
        <DayDetails
          day={formatDate(day)}
          getEvent={getEvent}
          refreshEvents={refreshEvents}
        />
      </DayWrapper>
    );
  });

  return (
    <HeaderContainer>
      <h2>Upcoming Events</h2>
      <NavigationButtons>
        <NavButton onClick={() => changeWeek(-1)}>⬅ Previous Week</NavButton>
        <WeekRange>
          {startOfWeek} - {endOfWeek}
        </WeekRange>
        <NavButton onClick={() => changeWeek(1)}>Next Week ➡</NavButton>
      </NavigationButtons>
      {renderDays(WeeklyDays)}
    </HeaderContainer>
  );
};

export default DayHeader;
