import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { validateEmail } from "../../../utils/helper";
import axiosInstance from "../../../utils/axiosInstance";

const Container = styled.div`
  padding: 1em;
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

const Input = styled.input`
  appearance: none;
  font-size: 1rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
  margin-right: 0.5em;
`;

const SubmitButton = styled.button`
  appearance: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 6px 16px;

  &:hover {
    background-color: rgb(215, 215, 215);
    text-decoration: none;
    transition-duration: 0.1s;
  }

  &:active {
    background-color: rgb(162, 162, 162);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    transition: none 0s;
  }
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: gray;
  }
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
            <Input
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
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          {error && <p>{error}</p>}
          <SubmitButton type="submit">Login</SubmitButton>
        </form>
        <p>Don't have an account?</p>
        <LoginLink to="/register">Sign Up</LoginLink>
      </InputContainer>
    </Container>
  );
}

export default Login;
