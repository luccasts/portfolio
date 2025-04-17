import { Route, Routes } from "react-router";
import "./App.css";

import { Layout } from "./components/Layout/Layout";
import { AboutPage } from "./pages/About/AboutPage";
import { ProjetosPage } from "./pages/Projetos/ProjetosPage";
import { ContatosPage } from "./pages/Contatos/ContatosPage";

export function RouterPage() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<AboutPage />} />
        <Route path="/projetos" index element={<ProjetosPage />} />
        <Route path="/contatos" index element={<ContatosPage />} />
      </Route>
    </Routes>
  );
}
