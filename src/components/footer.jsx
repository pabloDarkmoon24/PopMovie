import logoFooter from '../assets/Logo-Footer.png';
import '../styles/footer.css'

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logoFooter} alt="Logo PopMovie" className="footer-logo" />
        </div>

        <div className="footer-center">
          {/* Agrega aquí links importantes o navegación */}
          <ul className="footer-links">
            <li><a href="#combos"></a>.</li>
            <li><a href="#franquicia">.</a></li>
            <li><a href="#domicilio">.</a></li>
            <li><a href="#redes">.</a></li>
          </ul>
        </div>

        <div className="footer-right">
          {/* Puedes colocar redes sociales o contacto */}
          <p className="footer-contact">.</p>
          <p className="footer-contact">.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2025, <strong>Pop Movie</strong> - Todos los derechos reservados</p>
        </div>
    </footer>
  );
};
