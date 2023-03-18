import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import NotFoundPage from "../pages/notfound";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Rotas;
