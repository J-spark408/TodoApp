import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { validateEmail } from "../../../utils/helper";
import axiosInstance from "../../../utils/axiosInstance";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 99%;
`;

const Container = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  color: #ff5e62;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
  position: relative;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  outline: none;
  transition: 0.3s;
  width: 100%;
  padding-right: 40px; /* Space for eye icon */

  &:focus {
    border-color: #ff5e62;
    box-shadow: 0 0 8px rgba(255, 94, 98, 0.3);
    background: #fff;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ToggleIcon = styled.span`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #888;
  transition: 0.3s;

  &:hover {
    color: #ff5e62;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: #ff5e62;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-top: 10px;

  &:hover {
    background: #ff3b4e;
    box-shadow: 0 4px 8px rgba(255, 94, 98, 0.3);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-weight: bold;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const RegisterText = styled.p`
  margin-top: 15px;
  font-size: 0.9rem;
`;

const RegisterLink = styled(Link)`
  text-decoration: none;
  color: #ff5e62;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post("/user/login", {
        email,
        password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      setError(error.response?.data?.message || "Unexpected error occurred. Please try again.");
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <Label>Password</Label>
            <PasswordWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <ToggleIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </ToggleIcon>
            </PasswordWrapper>
          </InputContainer>

          {error && <ErrorText>{error}</ErrorText>}

          <SubmitButton type="submit">Login</SubmitButton>
        </form>

        <RegisterText>
          Don't have an account? <RegisterLink to="/register">Sign Up</RegisterLink>
        </RegisterText>
      </Container>
    </Wrapper>
  );
};

export default Login;
