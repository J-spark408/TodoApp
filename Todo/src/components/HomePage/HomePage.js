import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DayDetails from "../DayPage/DayDetails";

const Container = styled.div`
  margin-left: 5em;
  height: 100% auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  background-image: linear-gradient(#fdfcfb, #e2d1c3);
`;

const HomePage = () => {
  return (
    <Container className="DetailContainer">
      <DayDetails />
    </Container>
  );
};

export default HomePage;
