import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Neutron from "../assets/neutron.png";
import { Resultado } from "../types/result";

const Awaiting = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin-top: 120px;
    width: 250px;
    word-spacing: 20px;
    letter-spacing: 1px;
    margin-left: 100px;
    text-align: justify;
    font-size: 2.35rem;
    color: white;
    strong {
      animation: Neutron 3s infinite ease-in;
    }
    @media screen and (max-width: 800px) {
      font-size: 2rem;
      margin-left: 0px;
      text-align: center;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.75rem;
    }
  }
  img {
    margin-left: 100px;
    margin-top: 20px;
    width: 150px;
    animation: Waiting 2s infinite ease-in;
    transition-duration: 300ms;
    &:hover {
      width: 160px;
    }
    @media screen and (max-width: 800px) {
      margin-left: 0px;
    }
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
  @keyframes Waiting {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(-0);
    }
  }
`;

const Response = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin-top: 120px;
    width: 250px;
    word-spacing: 20px;
    letter-spacing: 1px;
    margin-left: 100px;
    text-align: center;
    font-size: 2.35rem;
    color: white;
    strong {
      animation: Neutron 3s infinite ease-in;
    }
    @media screen and (max-width: 800px) {
      font-size: 2rem;
      margin-left: 0px;
      text-align: center;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.75rem;
    }
  }
  img {
    margin-left: 100px;
    margin-top: 20px;
    width: 150px;
    transition-duration: 300ms;
    &:hover {
      width: 160px;
    }
    @media screen and (max-width: 800px) {
      margin-left: 0px;
    }
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
`;

const Family = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultComponent = ({ result }: Resultado) => {
  const Referencia = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    if (result !== 0) {
      Referencia.current?.scrollIntoView(true);
    }
  }, [result]);
  return (
    <Family>
      {result === 0 ? (
        <Awaiting>
          <h3>
            <strong>A</strong>guardando o <strong>R</strong>esultado
          </h3>
          <img src={Neutron} alt="Neutron" />
        </Awaiting>
      ) : (
        <Response>
          <h3 ref={Referencia}>
            {result} <strong>N</strong>eutrons
          </h3>
          <img src={Neutron} alt="Neutron" />
        </Response>
      )}
    </Family>
  );
};

export default ResultComponent;
