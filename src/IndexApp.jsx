import HeaderApp from "./Header/HeaderApp"; //npm start en terminal para ejecutar el proyecto
import FooterApp from "./Footer/FooterApp"; //npm run deploy para desplegar el proyecto
import "./Styles/styles.css";
import { Outlet } from "react-router-dom";

const IndexApp = () => {
  return (
    <div className="body-style">
      <HeaderApp />

      {/* Aquí se renderiza el contenido de cada página */}
      <Outlet />

      <FooterApp />
    </div>
  );
};

export default IndexApp;