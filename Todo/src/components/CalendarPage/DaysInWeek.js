import React from "react";
import styled from "styled-components";

// Styled Calendar UL with gradient background and smooth border
const CalenderUL = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding: 15px;
  background: linear-gradient(
    to top,
    rgba(207, 255, 254, 0.3),
    rgba(249, 247, 217, 0.3),
    rgba(252, 226, 206, 0.3),
    rgba(255, 193, 243, 0.3)
  );
  border: 3px solid #f0e6f5;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-clip: padding-box;
`;

// Styled List Item for days with hover and active states
const CalenderLI = styled.li`
  width: calc(100% / 7);
  font-size: 1.2rem;
  color: #3d3d3d;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;


  &:active {
    background-color: white;
    color: gray;
    transform: scale(0.95);
  }

  &:nth-child(1) {
    color: #e74c3c; /* Sunday in red */
  }

  &:nth-child(7) {
    color: #3498db; /* Saturday in blue */
  }
`;

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DaysInWeek = () => {
  const nameOfDays = daysOfWeek.map((day) => (
    <CalenderLI key={day}>{day}</CalenderLI>
  ));

  return <CalenderUL>{nameOfDays}</CalenderUL>;
};

export default DaysInWeek;
