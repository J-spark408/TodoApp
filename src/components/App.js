import React, { useState } from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./TodoBoard/Board";
import NavHeader from "./navbar/NavHeader";
import Calender from "./CalendarPage/Calendar";
import HomePage from "./HomePage/HomePage";
import DayTodo from "./DayPage/DayDetails";

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/12/:id" element={<DayTodo />} />
        <Route path="/daily" element={<Board />} />
        <Route path="/calendar" element={<Calender />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
