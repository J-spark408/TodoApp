import React from "react";
import styled from "styled-components";

const HeaderFont = styled.h2`
  color: $clr-primary;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 10px;
  text-align: center;
  text-shadow: -6px -6px $clr-secondary, -5px -5px $clr-secondary,
    -4px -4px $clr-secondary, -3px -3px $clr-secondary, -2px -2px $clr-secondary,
    -1px -1px $clr-secondary, 1px 1px $clr-secondary, 2px 2px $clr-secondary,
    3px 3px $clr-secondary, 4px 4px $clr-secondary, 5px 5px $clr-secondary,
    6px 6px $clr-secondary, 7px 7px $clr-secondary, 8px 8px $clr-secondary,
    9px 9px $clr-secondary, 10px 10px $clr-secondary, 11px 11px $clr-secondary,
    12px 12px $clr-secondary, 13px 13px $clr-secondary, 14px 14px $clr-secondary,
    15px 15px $clr-secondary, 16px 16px $clr-secondary, 17px 17px $clr-secondary,
    18px 18px $clr-secondary, 19px 19px $clr-secondary, 20px 20px $clr-secondary,
    21px 21px $clr-secondary, 22px 22px $clr-secondary, 23px 23px $clr-secondary,
    24px 24px $clr-secondary, 25px 25px $clr-secondary, 26px 26px $clr-secondary,
    27px 27px $clr-secondary, 25px 25px $clr-secondary, 28px 28px $clr-secondary,
    29px 29px $clr-secondary, 30px 30px $clr-secondary, 31px 31px $clr-secondary,
    32px 32px $clr-secondary, 33px 33px $clr-secondary, 34px 34px $clr-secondary,
    35px 35px $clr-secondary, 36px 36px $clr-secondary, 37px 37px $clr-secondary,
    38px 38px $clr-secondary, 39px 39px $clr-secondary, 40px 40px;
  width: 100%;
  animation: selected 0.4s infinite;
  @keyframes selected {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-1deg);
    }

    50% {
      transform: rotate(0deg);
    }

    75% {
      transform: rotate(1deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

const Header = () => {
  return <HeaderFont>New Event</HeaderFont>;
};

export default Header;
