import "../Styles/styles.css";
import { Link } from "react-router-dom";

const RegistApp = () => {
  return (
    <section className="login-section">
      <h2 className="login-title">Crear Cuenta</h2>
      <p className="login-description">
        Regístrate para acceder a nuestras soluciones, servicios y comunidad
        técnica.
      </p>

      <form className="login-form">
        <label htmlFor="name">Nombre completo:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirm-password">Confirmar contraseña:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required
        />

        <button type="submit" className="btn-iniciar register">
          Registrarse
        </button>

        <p className="login-extra">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login">Inicia sesión aquí</Link>.
        </p>
      </form>
    </section>
  );
};

export default RegistApp;
