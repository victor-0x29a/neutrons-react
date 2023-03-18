import React, { useRef, useState } from "react";
import styled from "styled-components";
import ResultComponent from "../../components/result";
import BarComponent from "../../components/bar";

const Formulario = styled.form`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 200px;
    font-size: 1.6rem;
    margin-top: 5rem;
    border: 0;
    outline: 0;
    color: white;
    background-color: #021b2b;
    border-radius: 8px;
    box-shadow: 0 0 5px aqua;
    padding: 5px;
    cursor: pointer;
    transition-duration: 600ms;
    &:hover {
      color: aqua;
    }
  }
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      width: 250px;
      text-align: center;
      font-size: 1.9rem;
      margin-bottom: 20px;
      margin-top: 40px;
    }
    input {
      color: white;
      padding-left: 5px;
      background-color: #021b2b;
      border: 0;
      outline: 0;
      font-size: 1.6rem;
      width: 200px;
      height: 40px;
      border-radius: 8px;
      animation: Neon 2s infinite linear;
    }
    @keyframes Neon {
      0% {
        box-shadow: 0 -5px 5px aqua;
      }
      50% {
        box-shadow: 0 5px 8px aqua;
      }
      100% {
        box-shadow: 0 -5px 5px aqua;
      }
    }
  }
  @media screen and (max-width: 800px) {
    h3 {
      font-size: 1.7rem;
    }
    input {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    h3 {
      font-size: 1.6rem;
    }
    input {
      font-size: 1.4rem;
    }
  }
`;

const SplitScreen = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const HomePage = () => {
  const [resultado, setResultado] = useState(0);
  const [mass, setMass] = useState(0);
  const [atomic, setAtomic] = useState(0);
  const Title = useRef<HTMLElement | null>(null);
  const handleMass = (e: string) => {
    setMass(Number(e));
  };
  const handleAtomic = (e: string) => {
    setAtomic(Number(e));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mass < atomic) {
      return;
    }
    setResultado(mass - atomic);
    setMass(0);
    setAtomic(0);
    setTimeout(() => {
      setResultado(0);
      Title.current?.scrollIntoView(true);
    }, 5 * 1000);
  };
  return (
    <>
      <BarComponent reference={Title} />
      <SplitScreen>
        <Formulario onSubmit={handleSubmit}>
          <label>
            <h3>Massa</h3>
            <input
              type="number"
              value={mass}
              onChange={(e) => handleMass(e.target.value)}
            />
          </label>
          <label>
            <h3>Numero atomico</h3>
            <input
              type="number"
              value={atomic}
              onChange={(e) => {
                handleAtomic(e.target.value);
              }}
            />
          </label>
          <button>Calcular</button>
        </Formulario>
        <ResultComponent result={resultado} />
      </SplitScreen>
    </>
  );
};

export default HomePage;
