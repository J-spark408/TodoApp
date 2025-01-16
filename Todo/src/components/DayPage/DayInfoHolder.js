import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 1em;
  width: 95%;
  padding: 10px;
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const TitleText = styled.p`
  font-weight: bold;
`;

const DetailText = styled.p``;

const DayInfoHolder = ({ title, content, tags }) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <DetailText>{content}</DetailText>
    </Container>
  );
};

export default DayInfoHolder;
