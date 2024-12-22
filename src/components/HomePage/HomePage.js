import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 5em;
  margin-top: 2em;
  background: #fff;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const FontDiv = styled.div`
  background: #fff;
  width: 95%;
  margin: auto;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const HeaderFont = styled.h1`
  font-size: 40px;
  display: flex;
  margin-left: 0.5em;
  transform: skew(-15deg);
  font-family: "Roboto";
  font-weight: 300;
`;

const HomePage = () => {
  return (
    <Container>
      <FontDiv>
        <HeaderFont>Today</HeaderFont>
      </FontDiv>
    </Container>
  );
};

export default HomePage;
