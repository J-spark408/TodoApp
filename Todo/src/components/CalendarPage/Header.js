import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 25px 30px 10px;
  justify-content: space-between;
`;

const DivNavigation = styled.div`
  display: flex;
`;

const PNavigation = styled.p`
  font-weight: 500;
  font-size: 1.45rem;
`;

const SpanNavigation = styled.span`
  height: 38px;
  width: 38px;
  margin: 0 1px;
  cursor: pointer;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
  user-select: none;
  color: #aeabab;
  font-size: 1.9rem;
  &:last-child {
    margin-right: -10px;
  }
  &:hover {
    background: #f2f2f2;
  }
`;

const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CalendarHeader = ({
  currentMonth,
  currentYear,
  setCurrentMonth,
  setCurrentYear,
}) => {
  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  return (
    <Header>
      <PNavigation className="calendar-current-date">
        {monthsOfYear[currentMonth]} {currentYear}
      </PNavigation>
      <DivNavigation className="calendar-navigation">
        <SpanNavigation onClick={prevMonth}>{"<"}</SpanNavigation>
        <SpanNavigation onClick={nextMonth}>{">"}</SpanNavigation>
      </DivNavigation>
    </Header>
  );
};

export default CalendarHeader;
