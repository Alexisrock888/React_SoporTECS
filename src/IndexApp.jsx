import React from "react";
import { Outlet } from "react-router-dom";
import HeaderApp from "./Header/HeaderApp";
import FooterApp from "./Footer/FooterApp";
import "./Styles/styles.css";

// npm start → ejecuta el proyecto en local (modo desarrollo).
// npm run build → npm run deploy -compila y despliega el proyecto en GitHub Pages.
// Luego, para guardar y subir cambios al repositorio:
// 1️.Clic en el ícono “+” (para agregar los archivos modificados)
// 2.Escribir un comentario de confirmación
// 3️.Presionar Ctrl + Enter para confirmar y subir los cambios.

const IndexApp = () => {
  return (
    <div className="app-layout">
      {/* Encabezado principal visible en todas las secciones */}
      <HeaderApp />

      {/* Contenedor principal donde se renderiza el contenido dinámico */}
      <main className="main-container">
        <Outlet />
      </main>

      {/* Pie de página fijo al final del sitio */}
      <FooterApp />
    </div>
  );
};

export default IndexApp;
