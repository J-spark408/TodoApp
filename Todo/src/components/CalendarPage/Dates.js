import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DatesUL = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const EmptySpace = styled.li`
  width: calc(100% / 7);
  position: relative;
`;

const DatesLink = styled(Link)`
  width: calc(100% / 7);
  color: #414141;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  height: 75px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: #f1f1f1;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em;
  }

  &.current-date {
    background:rgba(255, 179, 0, 0.87);
    font-weight: bold;
  }
  &.current-date:hover {
    box-shadow: 0 0 10px 4px rgb(255, 174, 0);
  }

  &:active {
    background-color: rgba(247, 182, 85, 0.92);
    color: #fff;
  }

  /* Differentiate weekends */
  &.weekend {
    color: #ff6347;
  }

  &:focus {
    outline: 2px solid #ff6600;
    outline-offset: 2px;
  }
`;

const Dates = ({
  firstDayOfMonth,
  daysInMonth,
  currentYear,
  currentMonth,
  currentDate,
}) => {
  const [clickedDate, setClickedDate] = useState("");

  return (
    <DatesUL className="calendar-dates">
      {[...Array(firstDayOfMonth).keys()].map((_, index) => (
        <EmptySpace key={`empty-${index}`} />
      ))}

      {[...Array(daysInMonth).keys()].map((day, id) => {
        const date = day + 1;
        const isCurrentDay =
          date === currentDate.getDate() &&
          currentMonth === currentDate.getMonth() &&
          currentYear === currentDate.getFullYear();
        const isWeekend = [0, 6].includes(
          new Date(currentYear, currentMonth, date).getDay()
        ); // 0 is Sunday, 6 is Saturday

        return (
          <DatesLink
            to={`/event/${currentYear}-${currentMonth + 1}-${date}`}
            key={id + 1}
            className={`${isCurrentDay ? "current-date" : ""} ${
              isWeekend ? "weekend" : ""
            }`}
          >
            {date}
          </DatesLink>
        );
      })}
    </DatesUL>
  );
};

export default Dates;
