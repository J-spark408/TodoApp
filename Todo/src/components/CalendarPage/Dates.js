import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const DatesUL = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  text-align: start;
`;

const EmptySpace = styled.li`
  width: calc(100% / 7);
  font-size: 1.07rem;
  position: relative;
`;

const DatesLink = styled(Link)`
  width: calc(100% / 7);
  height: 65px;
  margin-top: 1rem;
  font-size: 1.07rem;
  color: #414141;
  cursor: default;
  font-weight: 500;
  position: relative;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
  &.current-date {
    background: #e0ffcd;
  }
  &:active {
    color: #fff;
  }
  &:inactive {
    color: #aaa;
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
      {[...Array(daysInMonth).keys()].map((day, id) => (
        <DatesLink
          //to={`/${props.currentMonth + 1}_${id + 1}_${props.currentYear}`}
          to={`/events/${currentYear}/${currentMonth + 1}/${id + 1}`}
          key={id + 1}
          className={
            day + 1 === currentDate.getDate() &&
            currentMonth === currentDate.getMonth() &&
            currentYear === currentDate.getFullYear()
              ? `current-date`
              : `${day + 1}`
          }
        >
          {day + 1}
        </DatesLink>
      ))}
    </DatesUL>
  );
};

export default Dates;
