import React from "react";
import ReactDOM from "react-dom/client";
import { RouterPage } from "./Router";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterPage />
    </BrowserRouter>
  </React.StrictMode>
);
