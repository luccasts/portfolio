import { Route, Routes } from "react-router";
import "./App.css";

import { Layout } from "./components/Layout/Layout";
import { AboutPage } from "./pages/About/AboutPage";
import { ProjetosPage } from "./pages/Projetos/ProjetosPage";

export function RouterPage() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<AboutPage />} />
        <Route path="/projetos" index element={<ProjetosPage />} />
      </Route>
    </Routes>
  );
}
