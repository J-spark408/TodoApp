import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoCreate, IoLogOut, IoLogIn } from "react-icons/io5";
import { FaHome, FaRegCalendarAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

// Styled components for the navbar
const SideNav = styled.div`
  height: 100%;
  background-color: #300;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 10px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  width: 55px;
`;

const NavSelection = styled(Link)`
  display: flex;
  align-items: center;
  color: #ecf0f1;
  padding: 15px;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-bottom: 7px;

  &:hover {
    background-color: rgb(196, 196, 196);
    color: #ff5e62;
    border-radius: 5px;
    padding-left: 20px;
  }

  &.end {
    margin-top: auto;
    margin-bottom: 25px;
  }
`;

const Icon = styled.div`
  font-size: 1.5rem;
`;

const NavHeader = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  //const { loggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    window.location.reload();
  };

  const handleAddEventClick = (e) => {
    if (!loggedIn) {
      e.preventDefault(); // Prevent navigation
      navigate("/"); // Redirect to homepage
    }
  };

  return (
    <SideNav>
      <NavSelection title="Home" to="/">
        <Icon>
          <FaHome size={23} />
        </Icon>
      </NavSelection>

      <NavSelection
        title="Add event"
        to="/add-new-event"
        onClick={handleAddEventClick}
      >
        <Icon>
          <IoCreate size={23} />
        </Icon>
      </NavSelection>

      <NavSelection title="Calendar" to="/calendar">
        <Icon>
          <FaRegCalendarAlt size={23} />
        </Icon>
      </NavSelection>

      <NavSelection
        title={loggedIn ? "Logout" : "Login"}
        className="end"
        to={loggedIn ? "/" : "/login"}
        onClick={() => loggedIn && handleLogout()}
      >
        <Icon>{loggedIn ? <IoLogOut size={23} /> : <IoLogIn size={23} />}</Icon>
      </NavSelection>
    </SideNav>
  );
};

export default NavHeader;
