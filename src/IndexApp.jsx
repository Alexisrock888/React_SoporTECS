import React from "react";
import { Outlet } from "react-router-dom";
import HeaderApp from "./Header/HeaderApp";
import FooterApp from "./Footer/FooterApp";
import "./Styles/styles.css";

const IndexApp = () => {
  return (
    <>
      <HeaderApp />

      {/* Contenedor principal para renderizar las páginas */}
      <main className="main-container">
        <Outlet />
      </main>

      <FooterApp />
    </>
  );
};

export default IndexApp;
