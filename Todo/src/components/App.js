import React, { useState } from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./TodoBoard/Board";
import NavHeader from "./navbar/NavHeader";
import Calender from "./CalendarPage/Calendar";
import HomePage from "./HomePage/HomePage";
import DayTodo from "./DayPage/DayDetails";
import Login from "./LoginPage/Login";
import Signup from "./LoginPage/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/12/:id" element={<DayTodo />} />
        <Route path="/add-new-event" element={<Board />} />
        <Route path="/calendar" element={<Calender />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
