import React, { useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components";
import DayDetails from "../DayPage/DayDetails";

const DayHeaderDiv = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 25px;
  font-family: system-ui;
`;

const DayHeader = ({ weeklyView, event }) => {
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

  const showSevenDays = SevenDays.map((day, index) => (
    <DayHeaderDiv key={index}>
      {formatDate(day) === moment(today).format("MMMM DD, YYYY") ? (
        <p>{"Today"} </p>
      ) : (
        <p>{formatDay(day) + " " + formatDate(day)}</p>
      )}
      <DayDetails day={formatDate(day)} />
    </DayHeaderDiv>
  ));
  const showWeeklyDays = WeeklyDays.map((day, index) => (
    <DayHeaderDiv key={index}>
      {formatDate(day) === moment(today).format("MMMM DD, YYYY") ? (
        <p>{"Today"} </p>
      ) : (
        <p>{formatDay(day) + " " + formatDate(day)}</p>
      )}
      <DayDetails day={formatDate(day)} />
    </DayHeaderDiv>
  ));

  return (
    <DayHeaderDiv>
      {weeklyView === "SevenDays" ? showSevenDays : showWeeklyDays}
    </DayHeaderDiv>
  );
};

export default DayHeader;
