import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

// Importa los componentes principales
import IndexApp from "./IndexApp.jsx";
import InicioApp from "./Inicio/InicioApp.jsx";
import LoginApp from "./Login/LoginApp.jsx";
import RegistApp from "./Registro/RegistApp.jsx";
import TiendaApp from "./Tienda/TiendaApp.jsx";
import SolucionesApp from "./Soluciones/SolucionesApp.jsx";
import MarketplaceApp from "./Marketplace/MarketplaceApp.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Ruta principal que contiene el layout */}
        <Route path="/" element={<IndexApp />}>
          <Route index element={<InicioApp />} />
          <Route path="login" element={<LoginApp />} />
          <Route path="registro" element={<RegistApp />} />
          <Route path="tienda" element={<TiendaApp />} />
          <Route path="soluciones" element={<SolucionesApp />} />
          <Route path="marketplace" element={<MarketplaceApp />} />
          {/* Cualquier ruta no reconocida redirige a Inicio */}
          <Route path="*" element={<InicioApp />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
