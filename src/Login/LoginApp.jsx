import "../Styles/styles.css";
import { Link } from "react-router-dom";

const LoginApp = () => {
  return (
    <section className="login-section">
      <h2 className="login-title">Iniciar Sesión</h2>
      <p className="login-description">
        Accede a tu cuenta para comprar, gestionar servicios y más.
      </p>

      <form className="login-form">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" className="btn-iniciar login">
          Iniciar Sesión
        </button>

        <p className="login-extra">
          ¿No tienes una cuenta?{" "}
          <Link to="/registro">Regístrate aquí</Link>.
        </p>
      </form>
    </section>
  );
}

export default LoginApp