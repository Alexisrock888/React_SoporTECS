import React from "react";
import "../Styles/styles.css";

const SolucionesApp = () => {
  return (
    <section className="solutions-section">
      <h2 className="solutions-title">Centro de Soluciones</h2>
      <p className="solutions-description">
        Encuentra respuestas, guías y ayuda para resolver tus problemas técnicos.
      </p>

      <div className="solutions-grid">
        <div className="solution-card">
          <h3>Instalación de Software</h3>
          <p>
            Guías detalladas para instalar sistemas operativos, suites ofimáticas y más.
          </p>
          <a
            href="https://www.youtube.com/@TutosPCyoutube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-ver">Ver canal</button>
          </a>
        </div>

        <div className="solution-card">
          <h3>Errores Comunes</h3>
          <p>
            Soluciones rápidas a problemas frecuentes en Windows y programas populares.
          </p>
          <a
            href="https://www.solvetic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-ver">Ver solución</button>
          </a>
        </div>

        <div className="solution-card">
          <h3>Soporte Personalizado</h3>
          <p>
            Contáctanos directamente para asistencia remota o técnica especializada.
          </p>
          <a
            href="https://alexisrock888.github.io/React_SoporTECS/#/marketplace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-ver">Contactar</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolucionesApp;
