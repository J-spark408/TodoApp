import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ViewOptionDiv = styled.div`
  display: flex;
  margin-left: 1em;
  padding: 1em;
  height: 25px;
`;

const OptionButton = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 1em;
  font-family: "Courier New", monospace;
  &:hover {
    font-size: 23px;
  }
`;

const ViewOption = ({ weeklyView, setWeeklyView }) => {
  return (
    <ViewOptionDiv>
      <OptionButton
        style={{
          color: weeklyView === "Weekly" ? "salmon" : "black",
          fontWeight: weeklyView === "Weekly" ? "bold" : "normal",
        }}
        onClick={() => {
          setWeeklyView("Weekly");
        }}
      >
        Weekly
      </OptionButton>
      <OptionButton
        style={{
          color: weeklyView === "SevenDays" ? "salmon" : "black",
          fontWeight: weeklyView === "SevenDays" ? "bold" : "normal",
        }}
        onClick={() => {
          setWeeklyView("SevenDays");
        }}
      >
        7-Days
      </OptionButton>
      <OptionButton
      // style={{ color: weeklyView === "Pinned" ? "salmon" : "black" }}
      // onClick={() => {
      //   setWeeklyView("Pinned");
      // }}
      >
        Pinned
      </OptionButton>
    </ViewOptionDiv>
  );
};

export default ViewOption;
