import React, { useState, useEffect } from "react";
import "../Styles/styles.css";

const MarketplaceApp = () => {
  const [tecnicos, setTecnicos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lista de profesiones base
  const profesiones = [
    "Soporte Técnico",
    "Especialista en Redes",
    "Ingeniero de Software",
    "Técnico en Hardware",
    "Consultor IT",
    "Administrador de Sistemas",
  ];

  // Función para cargar técnicos desde la API
  const cargarTecnicos = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api/?results=6&nat=es,us");
      const data = await res.json();
      setTecnicos(data.results);
    } catch (error) {
      console.error("Error al cargar técnicos:", error);
      setTecnicos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarTecnicos();
  }, []);

  return (
    <section className="marketplace-section">
      <h2 className="marketplace-title">Marketplace de Técnicos</h2>
      <p className="marketplace-description">
        Conéctate con técnicos calificados disponibles para ayudarte.
      </p>

      {loading ? (
        <p>Cargando técnicos...</p>
      ) : tecnicos.length > 0 ? (
        <div className="tech-grid">
          {tecnicos.map((t, i) => (
            <div className="tech-card" key={i}>
              <img
                src={t.picture.medium}
                alt={`${t.name.first} ${t.name.last}`}
                className="tech-img"
              />
              <h3>{t.name.first} {t.name.last}</h3>
              <p className="tech-prof">
                {profesiones[i % profesiones.length]}
              </p>
              <p className="tech-email">Contacto: {t.email}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: "red" }}>
          No se pudieron cargar los técnicos. Intenta nuevamente.
        </p>
      )}

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button className="btn-circular" onClick={cargarTecnicos}>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </section>
  );
};

export default MarketplaceApp;
