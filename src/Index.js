import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import IndexApp from "./IndexApp.jsx";
import RegistApp from "./Registro/RegistApp.jsx";
import LoginApp from "./Login/LoginApp.jsx";
import InicioApp from "./Inicio/InicioApp.jsx"; // si no tienes este componente, avísame y te dejo una versión simple

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<IndexApp />}>
          <Route index element={<InicioApp />} />
          <Route path="login" element={<LoginApp />} />
          <Route path="registro" element={<RegistApp />} />
          <Route path="*" element={<InicioApp />} /> 
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);