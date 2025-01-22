import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoCreate, IoLogOut, IoLogIn } from "react-icons/io5";
import { FaHome, FaRegCalendarAlt } from "react-icons/fa";

const TopNav = styled.div`
  width: auto;
  height: 100%;
  background-color: #300;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0px;
  left: 0px;
`;

const NavSelection = styled(Link)`
  color: #f2f2f2;
  padding: 14px 16px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  &.end {
  }
`;

const NavHeader = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isUserLoggedIn = () => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    isUserLoggedIn();
    return () => {};
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    window.location.reload();
    return;
  };

  return (
    <TopNav>
      <NavSelection title="Home" to="/">
        <FaHome size={23} />
      </NavSelection>
      <NavSelection title="Add event" to="/add-new-event">
        <IoCreate size={23} />
      </NavSelection>
      <NavSelection title="Calendar" to="/calendar">
        <FaRegCalendarAlt size={23} />
      </NavSelection>
      <NavSelection
        title={loggedIn ? "Logout" : "Login"}
        className="end"
        to="/login"
        onClick={() => {
          loggedIn && handleLogout();
        }}
      >
        {loggedIn ? <IoLogOut size={23} /> : <IoLogIn size={23} />}
      </NavSelection>
    </TopNav>
  );
};

export default NavHeader;
