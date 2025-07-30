import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";

const DateOptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SelectBar = styled.select`
  appearance: none;
  font-size: 1rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
  margin-right: 0.5em;
  width: auto;
`;

const SelectOption = styled.option`
  overflow: hidden;
  &:-webkit-scrollbar {
    display: none;
  }
`;

const nameOfMonths = [
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

const monthsInEnum = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const DateHandler = ({ setDate, date, isEdit }) => {
  const updateDate = new Date(date);
  const [editDay, setEditDay] = useState(updateDate.getDate());

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentDay, setCurrentDay] = useState(currentDate.getDate());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const years = Array.from(
    { length: 11 },
    (_, i) => currentDate.getFullYear() + i
  );

  useEffect(() => {
    if (isEdit) {
      setDate(`${currentYear}-${currentMonth + 1}-${editDay}`);
    } else {
      setDate(`${currentYear}-${currentMonth + 1}-${currentDay}`);
    }
  });

  return (
    <DateOptionDiv>
      <SelectBar
        value={nameOfMonths[currentMonth]}
        onChange={(e) => setCurrentMonth(monthsInEnum[e.target.value])}
      >
        {nameOfMonths.map((month, index) => {
          return <SelectOption key={index}>{month}</SelectOption>;
        })}
      </SelectBar>
      <SelectBar
        value={isEdit ? editDay : currentDay}
        onChange={(e) => {
          isEdit ? setEditDay(e.target.value) : setCurrentDay(e.target.value);
        }}
      >
        {[...Array(daysInMonth).keys()].map((day, id) => (
          <SelectOption key={id}>{day + 1}</SelectOption>
        ))}
      </SelectBar>
      <SelectBar onChange={(e) => setCurrentYear(e.target.value)}>
        {years.map((year) => {
          return (
            <SelectOption key={year} value={year}>
              {year}
            </SelectOption>
          );
        })}
      </SelectBar>
    </DateOptionDiv>
  );
};

export default DateHandler;
