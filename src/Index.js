import reactDom from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import IndexApp from "./IndexApp.jsx";
import InicioApp from "./Inicio/InicioApp.jsx";
import RegistApp from "./Registro/RegistApp.jsx";
import LoginApp from "./Login/LoginApp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexApp />}>
      <Route index element={<InicioApp />} /> {/* Página principal */}
      <Route path="registro" element={<RegistApp />} />
      <Route path="login" element={<LoginApp />} />
    </Route>
  )
);

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

