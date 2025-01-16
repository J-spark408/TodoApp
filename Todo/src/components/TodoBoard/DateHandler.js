import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

const DateOptionDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const SelectBar = styled.select`
  font-size: 16px;
  line-height: 1;
  margin-right: 26px;
`;

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DateHandler = ({ setDate }) => {
  const [selectedDate, setSelectedDate] = useState("");

  // Generate an array of date options
  const generateDateOptions = () => {
    const today = new Date();
    const options = [];

    // Create options for the next 7 days
    for (let i = 0; i < 20; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      options.push(
        <option key={i} value={formattedDate}>
          {formattedDate}
        </option>
      );
    }
    return options;
  };

  const monthOption = daysOfWeek.map((day) => {
    return <option key={day}>{day}</option>;
  });

  const handleChange = (date) => {
    setSelectedDate(date);
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <select value={selectedDate} onChange={(e) => handleChange(e.target.value)}>
      <option value="">Select a date</option>
      {generateDateOptions()}
    </select>
  );
};

export default DateHandler;
