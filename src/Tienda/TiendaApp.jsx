import "../Styles/styles.css";

const TiendaApp = () => {
  return (
    <main className="store-section">
      <h2 className="store-title">Tienda de Software</h2>
      <p className="store-description">
        Explora nuestras soluciones de software original para empresas, gamers y profesionales.
      </p>

      <div className="store-grid">
        <div className="product-card">
          <h3>Windows 11 Pro</h3>
          <p>Licencia oficial para 1 PC. Ideal para entornos de trabajo.</p>
          <a
            href="https://activatusoftware.com/producto/windows-11-pro/?gad_source=1&gad_campaignid=21846482840"
            target="_blank" rel="noopener noreferrer"
          >
            <button className="btn-comprar">Ver más</button>
          </a>
        </div>

        <div className="product-card">
          <h3>Microsoft Office 2021</h3>
          <p>Suite completa para productividad. Word, Excel, PowerPoint y más.</p>
          <a
            href="https://buhodigitalcol.com/office-2021-proplus/"
            target="_blank" rel="noopener noreferrer"
          >
            <button className="btn-comprar">Ver más</button>
          </a>
        </div>

        <div className="product-card">
          <h3>Antivirus ESET NOD32</h3>
          <p>Protección rápida y ligera para tu equipo.</p>
          <a
            href="https://www.mercadolibre.com.co/antivirus-eset-internet-security-1-ano-1-dispositivo/p/MCO43842091"
            target="_blank" rel="noopener noreferrer"
          >
            <button className="btn-comprar">Ver más</button>
          </a>
        </div>

        <div className="product-card">
          <h3>Adobe Photoshop</h3>
          <p>Edición profesional de imágenes y diseño gráfico.</p>
          <a
            href="https://cambiosystem.com/tienda/licencia-adobe-photoshop-por-1-ano/"
            target="_blank" rel="noopener noreferrer"
          >
            <button className="btn-comprar">Ver más</button>
          </a>
        </div>

        <div className="product-card">
          <h3>FIFA 24</h3>
          <p>Experimenta el fútbol con gráficos realistas y modos competitivos online.</p>
          <a
            href="https://juegosdigitalescolombia.com/productos/ea-sports-fc-24-ps4"
            target="_blank" rel="noopener noreferrer"
          >
            <button className="btn-comprar">Comprar</button>
          </a>
        </div>

        <div className="product-card">
          <h3>Grand Theft Auto V (GTA V)</h3>
          <p>Juego de mundo abierto con misiones, historia intensa y multijugador online.</p>
          <a
            href="https://www.falabella.com.co/falabella-co/product/10476531/Grand-Theft-Auto-V-Premium/10476531"
            target="_blank" rel="noopener noreferrer"
          >
            <button className="btn-comprar">Comprar</button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default TiendaApp;
