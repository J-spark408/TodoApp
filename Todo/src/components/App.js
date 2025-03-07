import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./TodoBoard/Board";
import NavHeader from "./NavBar/NavHeader";
import Calender from "./CalendarPage/Calendar";
import HomePage from "./HomePage/HomePage";
import Login from "./LoginPage/Login";
import Signup from "./LoginPage/SignUp";

const App = () => {
  return (
    <BrowserRouter>
        <NavHeader />
      <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/event/:createdOn" element={<DayInfoHolder />} /> */}
          <Route path="/add-new-event" element={<Board />} />
          <Route path="/calendar" element={<Calender />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
