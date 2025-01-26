import React, { useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components";

const time = new Date();

const DayHeaderDiv = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 25px;
`;

const DayHeader = ({ date, event }) => {
  const [dateTitle, setDataTitle] = useState("");
  const formatDate = moment(date).format("MMMM DD YYYY");
  const getToday = moment(time).format("MMMM DD YYYY");

  const checkDate = () => {
    if (formatDate === getToday) {
      setDataTitle("Today");
    } else {
      setDataTitle(formatDate);
    }
  };

  useEffect(() => {
    checkDate();
    return () => {};
  }, []);

  return (
    <div>
      <DayHeaderDiv>{dateTitle}</DayHeaderDiv>
    </div>
  );
};

export default DayHeader;
