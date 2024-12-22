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

const CalendarHeader = (props) => {
  const prevMonth = () => {
    props.setCurrentMonth((prevMonth) =>
      prevMonth === 0 ? 11 : prevMonth - 1
    );
    props.setCurrentYear((prevYear) =>
      props.currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const nextMonth = () => {
    props.setCurrentMonth((prevMonth) =>
      prevMonth === 11 ? 0 : prevMonth + 1
    );
    props.setCurrentYear((prevYear) =>
      props.currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  return (
    <Header>
      <PNavigation className="calendar-current-date">
        {monthsOfYear[props.currentMonth]} {props.currentYear}
      </PNavigation>
      <DivNavigation className="calendar-navigation">
        <SpanNavigation onClick={prevMonth}>{"<"}</SpanNavigation>
        <SpanNavigation onClick={nextMonth}>{">"}</SpanNavigation>
      </DivNavigation>
    </Header>
  );
};

export default CalendarHeader;
