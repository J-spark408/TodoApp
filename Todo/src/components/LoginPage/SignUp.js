import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { validateEmail } from "../../../utils/helper";
import axiosInstance from "../../../utils/axiosInstance";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Eye icons for toggle

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

const LoginText = styled.p`
  margin-top: 15px;
  font-size: 0.9rem;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #ff5e62;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const PasswordRequirements = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 0.9rem;
  color: #555;
  margin-top: 10px;
  text-align: left;
`;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your full name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Password validation: at least 8 characters and one number
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    if (!password) {
      setError("Please enter a password");
      setPasswordError(null);
      return;
    }
    if (!passwordPattern.test(password)) {
      setPasswordError("Password requirements");
      return;
    } else {
      setPasswordError(null);
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post("/user/register", {
        fullName: name,
        email,
        password,
      });

      if (response.data?.error) {
        setError(response.data.message);
        return;
      }

      if (response.data?.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </InputContainer>

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

          <InputContainer>
            <Label>Confirm Password</Label>
            <PasswordWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Re-enter Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <ToggleIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </ToggleIcon>
            </PasswordWrapper>
          </InputContainer>

          {passwordError && <ErrorText>{passwordError}</ErrorText>}
          {error && !passwordError && <ErrorText>{error}</ErrorText>}

          <PasswordRequirements>
            {passwordError !== null && (
              <>
                <li>Password must be at least 8 characters long</li>
                <li>Password must contain at least one number</li>
              </>
            )}
          </PasswordRequirements>

          <SubmitButton type="submit">Sign Up</SubmitButton>
        </form>

        <LoginText>
          Already have an account? <LoginLink to="/login">Login</LoginLink>
        </LoginText>
      </Container>
    </Wrapper>
  );
};

export default Signup;
