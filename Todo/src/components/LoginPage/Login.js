import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { validateEmail } from "../../../utils/helper";
import axiosInstance from "../../../utils/axiosInstance";

const Container = styled.div`
  margin: auto;
  width: 50%;
  height: 50%;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post("/user/login", {
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Unexpected error occured. Please try again");
      }
    }
  };

  return (
    <Container>
      <h2>
        <center>Login</center>
      </h2>
      <InputContainer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/register">Sign Up</Link>
      </InputContainer>
    </Container>
  );
}

export default Login;
