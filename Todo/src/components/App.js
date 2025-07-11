import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Board from "./TodoBoard/Board";
const Board = React.lazy(() => import('./TodoBoard/Board'));
//import NavHeader from "./NavBar/NavHeader";
const NavHeader = React.lazy(() => import('./NavBar/NavHeader'));
//import Calender from "./CalendarPage/Calendar";
const Calender = React.lazy(() => import('./CalendarPage/Calendar'));
//import HomePage from "./HomePage/HomePage";
const HomePage = React.lazy(() => import('./HomePage/HomePage'));
//import Login from "./LoginPage/Login";
const Login = React.lazy(() => import('./LoginPage/Login'));
//import Signup from "./LoginPage/SignUp";
const Signup = React.lazy(() => import('./LoginPage/SignUp'));

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
