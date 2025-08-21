import logoFooter from '../assets/Logo-Footer.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import WhatIcon from '../assets/whatsapp.png';
import '../styles/footer.css';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Logo principal */}
        <div className="footer-left">
          <img src={logoFooter} alt="Logo PopMovie" className="footer-logo" />
        </div>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a href="https://www.facebook.com/profile.php?id=61566127092651" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/popmovie_/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://linktr.ee/Popmovie_" target="_blank" rel="noopener noreferrer">
            <img src={WhatIcon} alt="whatsapp" className="social-icon" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2025, <strong>Pop Movie</strong> - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
