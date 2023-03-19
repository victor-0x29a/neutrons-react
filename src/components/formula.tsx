import React from "react";
import styled from "styled-components";

const Body = styled.div`
  position: static;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 150px;
  background-color: #1e1f20;
  margin-top: 50px;
  opacity: 0;
  transition-duration: 1s;
  &:hover {
    opacity: 1;
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      color: #768385;
      list-style: none;
      font-size: 1.5rem;
      width: 300px;
      cursor: default;
      transition-duration: 300ms;
      &:hover {
        color: aqua;
      }
    }
  }
`;

const FormulaComponent = () => {
  const steps: Array<string> = [
    "N = NEUTRONS",
    "Z = MASSA",
    "A = NÚMERO ATÔMICO",
    "N = Z - A",
  ];
  return (
    <Body>
      <ul>
        {steps?.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </Body>
  );
};

export default FormulaComponent;
