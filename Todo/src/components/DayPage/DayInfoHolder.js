import React, { useState } from "react";
import styled from "styled-components";
import { TbPinned, TbPinnedFilled } from "react-icons/tb";
import { RiFileEditLine, RiFileEditFill } from "react-icons/ri";
import { MdDeleteOutline, MdDelete } from "react-icons/md";

const Container = styled.div`
  margin: 0.5em;
  padding: 5px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const DividedLine = styled.hr`
  width: 95%;
  margin-left: 0.4em;
`;

const TitleText = styled.p`
  margin-left: 0.5em;
  margin-bottom: 1.5em;
  font-size: 23px;
  font-family: "Lucida Console", "Courier New", monospace;
`;

const DetailText = styled.p`
  margin-left: 2em;
  font-weight: normal;
  font-size: 15px;
  color: grey;
  font-family: "Lucida Console", "Courier New", monospace;
`;

const UpdateButton = styled.button`
  border: none;
  cursor: pointer;
  background: #fff;
  font-size: 23px;
  padding: 0.5em;
  &.pinned {
    float: right;
  }
`;

const DayInfoHolder = ({ title, content, tags }) => {
  const [pinHovered, setPinHovered] = useState(false);
  const [editHovered, setEditHovered] = useState(false);
  const [deleteHovered, setDeleteHovered] = useState(false);
  return (
    <Container>
      <UpdateButton
        className="pinned"
        title="Pinned"
        onMouseEnter={() => setPinHovered(true)}
        onMouseLeave={() => setPinHovered(false)}
      >
        {pinHovered ? <TbPinnedFilled /> : <TbPinned />}
      </UpdateButton>
      {/*****************************************************************************/}
      <TitleText>{title}</TitleText>
      <DetailText>{content}</DetailText>
      {/*****************************************************************************/}
      <DividedLine />
      <UpdateButton
        title="Edit"
        onMouseEnter={() => setEditHovered(true)}
        onMouseLeave={() => setEditHovered(false)}
      >
        {editHovered ? <RiFileEditFill /> : <RiFileEditLine />}
      </UpdateButton>
      <UpdateButton
        title="Delete"
        onMouseEnter={() => setDeleteHovered(true)}
        onMouseLeave={() => setDeleteHovered(false)}
      >
        {deleteHovered ? <MdDelete /> : <MdDeleteOutline />}
      </UpdateButton>
    </Container>
  );
};

export default DayInfoHolder;
