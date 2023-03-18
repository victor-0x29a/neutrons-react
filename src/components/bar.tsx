import React from "react";
import styled from "styled-components";
import { BarProps } from "../types/bar";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.75rem;
  span {
    background-image: linear-gradient(
      -225deg,
      #00f7ff 0%,
      #fa9696 29%,
      #768bff 67%,
      #00fff2 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: Text 2s linear infinite;
  }
  strong {
    animation: Neutron 3s infinite ease-in;
  }
  @keyframes Neutron {
    0% {
      color: white;
    }
    50% {
      color: aqua;
    }
    100% {
      color: white;
    }
  }
  @keyframes Text {
    to {
      background-position: 200% center;
    }
  }
  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

const BarComponent = ({ reference }: BarProps) => {
  return (
    <Nav ref={reference}>
      <strong>N</strong>
      <span>eutrons</span>
    </Nav>
  );
};

export default BarComponent;
