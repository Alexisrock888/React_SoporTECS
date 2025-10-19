import { useState, useEffect } from "react";
import "../Styles/styles.css";
import { Link } from "react-router-dom";

const HeaderApp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = (e) => {
    e.stopPropagation();
    setProfileOpen(!profileOpen);
  };

  // Cierra el menú de perfil si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("profile-dropdown");
      const btn = document.getElementById("profile-btn");
      if (
        dropdown &&
        btn &&
        !dropdown.contains(event.target) &&
        !btn.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header>
      <div className="header-container">
        <h1 className="header-title">SoporTECS</h1>

        {/* Botón menú hamburguesa */}
        <button id="menu-toggle" className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Menú principal */}
<nav className="navbar">
  <ul id="nav-list" className={`nav-list ${menuOpen ? "show" : ""}`}>
    <li>
      <Link to="/" className="nav-link activo">
        Inicio
      </Link>
    </li>
    <li>
      <Link to="/tienda" className="nav-link">
        Tienda de Software
      </Link>
    </li>
    <li>
      <Link to="/soluciones" className="nav-link">
        Centro de Soluciones
      </Link>
    </li>
    <li>
      <Link to="/marketplace" className="nav-link">
        Marketplace de Técnicos
      </Link>
    </li>

          {/* Menú perfil */}
          <li className="nav-item profile-menu">
            <button
              id="profile-btn"
              className="nav-link"
              title="Perfil"
              onClick={toggleProfile}
            >
              <i className="fas fa-user"></i> <i className="fas fa-caret-down"></i>
            </button>
            <ul
              id="profile-dropdown"
              className={`dropdown-menu ${profileOpen ? "show" : ""}`}
            >
<li><Link to="/login">Iniciar sesión</Link></li>
<li><Link to="/registro">Registrarse</Link></li>
            </ul>
          </li>

          {/* Selector de idioma */}
          <li className="idioma-dropdown">
            <select id="language-selector">
              <option value="es">🇪🇸 ES</option>
              <option value="en">🇺🇸 EN</option>
              <option value="pt">🇧🇷 PT</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderApp;
