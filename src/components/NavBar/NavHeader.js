import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoCreate, IoLogOut } from "react-icons/io5";
import { FaHome, FaRegCalendarAlt } from "react-icons/fa";

const TopNav = styled.div`
  width: auto;
  height: 100%;
  background-color: #300;
  position: fixed;
`;

const NavSelection = styled(Link)`
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  outline: none;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  &.end {
  }
`;

const NavHeader = () => {
  return (
    <TopNav>
      <NavSelection title="Home" to="/">
        <FaHome size={23} />
      </NavSelection>
      <NavSelection title="Add Todo" to="/daily">
        <IoCreate size={23} />
      </NavSelection>
      <NavSelection title="Calendar" to="/calendar">
        <FaRegCalendarAlt size={23} />
      </NavSelection>
      <NavSelection title="Log" className="end" to="/log">
        <IoLogOut size={23} />
      </NavSelection>
    </TopNav>
  );
};

export default NavHeader;
