import React from "react";
import styled from "styled-components";
import { Divide } from "../types/screen";

const Screen = styled.div`
  display: flex;
  flex-direction: row;
`;

const ScreenComponent = ({ children }: Divide) => {
  return <Screen>{children}</Screen>;
};

export default ScreenComponent;
