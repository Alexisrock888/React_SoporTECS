import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../Styles/styles.css";

const HeaderApp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleProfile = (e) => {
    e.stopPropagation();
    setProfileOpen(!profileOpen);
  };

  // Cierra el menú de perfil si se hace clic fuera
useEffect(() => {
  const handleOutsideClick = (event) => {
    const navList = document.getElementById("nav-list");
    const toggleBtn = document.getElementById("menu-toggle");

    // Si el menú está abierto y el clic fue fuera del menú y del botón
    if (
      menuOpen &&
      navList &&
      !navList.contains(event.target) &&
      !toggleBtn.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  document.addEventListener("click", handleOutsideClick);
  return () => document.removeEventListener("click", handleOutsideClick);
}, [menuOpen]);

  //Detectar si estamos en login o registro
  const isProfileActive =
    location.pathname.includes("login") || location.pathname.includes("registro");

  return (
<header>
  <div className="header-container">
    <Link to="/" className="header-title-link" onClick={() => setMenuOpen(false)}>
      <h1 className="header-title">SoporTECS</h1>
    </Link>

        {/* Botón menú hamburguesa */}
        <button id="menu-toggle" className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Menú principal */}
      <nav className="navbar">
        <ul id="nav-list" className={`nav-list ${menuOpen ? "show" : ""}`}>
          <li>
            <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/tienda" className="nav-link" onClick={() => setMenuOpen(false)}>
              Tienda de Software
            </NavLink>
          </li>
          <li>
            <NavLink to="/soluciones" className="nav-link" onClick={() => setMenuOpen(false)}>
              Centro de Soluciones
            </NavLink>
          </li>
          <li>
            <NavLink to="/marketplace" className="nav-link" onClick={() => setMenuOpen(false)}>
              Marketplace de Técnicos
            </NavLink>
          </li>
{/* Menú perfil */}
<li className="nav-item profile-menu">
  <button
    id="profile-btn"
    className={`nav-link ${isProfileActive ? "active" : ""}`} 
    title="Perfil"
    onClick={toggleProfile}
  >
    <i className="fas fa-user"></i>{" "}
    <i className="fas fa-caret-down"></i>
  </button>

  <ul
    id="profile-dropdown"
    className={`dropdown-menu ${profileOpen ? "show" : ""}`}
  >
    <li>
      <Link
        to="/login"
        onClick={() => {
          setProfileOpen(false);
          setMenuOpen(false);
        }}
      >
        Iniciar sesión
      </Link>
    </li>
    <li>
      <Link
        to="/registro"
        onClick={() => {
          setProfileOpen(false);
          setMenuOpen(false);
        }}
      >
        Registrarse
      </Link>
    </li>
  </ul>
</li>

{/* Selector de idioma */}
<li className="idioma-dropdown">
  <select
    id="language-selector"
    onChange={() => {
      setMenuOpen(false);
      setProfileOpen(false);
    }}
  >
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
