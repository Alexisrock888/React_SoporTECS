import "../Styles/styles.css";

const InicioApp = () => {
  return (
    <main>
      <section className="intro-section">
        <div className="intro-content">
          <img
            src="/img/STS.png"
            alt="Logo de SoporTECS"
            className="intro-image"
          />
          <p>
            SoporTECS es una plataforma digital integral pensada para ofrecer
            soluciones tecnológicas accesibles, confiables y centralizadas. El
            sitio web está orientado tanto a usuarios casuales como a
            profesionales que buscan soporte técnico, software legal a buen
            precio, asistencia personalizada y entretenimiento digital.
          </p>
        </div>
      </section>
    </main>
  );
};

export default InicioApp;
