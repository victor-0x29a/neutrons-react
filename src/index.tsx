import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./global/style";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Rotas />
  </BrowserRouter>
);
