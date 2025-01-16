import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CalendarHeader from "./Header";
import DaysInWeek from "./DaysInWeek";
import Dates from "./Dates";

const Container = styled.div`
  margin-left: 5em;
  background: #fff;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const CalenderBody = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border: 3px solid;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(
    to top,
    rgba(#cffffe, 0.3),
    rgba(#f9f7d9, 0.3),
    rgba(#fce2ce, 0.3),
    rgba(#ffc1f3, 0.3)
  );
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23cffffe' /%3E%3Cstop offset='25%25' stop-color='%23f9f7d9' /%3E%3Cstop offset='50%25' stop-color='%23fce2ce' /%3E%3Cstop offset='100%25' stop-color='%23ffc1f3' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3'/%3E %3C/svg%3E")
    1;
`;

const Calendar = () => {
  const currentDate = new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  return (
    <Container>
      <CalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      <CalenderBody>
        <DaysInWeek />
        <Dates
          firstDayOfMonth={firstDayOfMonth}
          daysInMonth={daysInMonth}
          currentDate={currentDate}
          currentMonth={currentMonth}
          currentYear={currentYear}
        />
      </CalenderBody>
    </Container>
  );
};

export default Calendar;
