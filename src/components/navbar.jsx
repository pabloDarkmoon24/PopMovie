import { useState } from 'react';
import '../styles/navbar.css';
import '../styles/grid.css';
import logo from '../assets/logo-popmovie.png';
import contacto from '../assets/Boton-contacto.png'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="row align-center space-between">
          {/* Logo */}
          <div className="col-3 col-sm-6 nav-logo">
            <img src={logo} alt="PopMovie Logo" />
          </div>

          <div className="col-3 col-sm-6 nav-toggle mobile-only">
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
          </div>

          <div className="col-6 nav-links desktop-only">
            <a href="#productos">Productos</a><a >▏</a>
            <a href="#sedes">Sedes</a><a >▏</a>
            <a href="#franquicias">Franquicias</a><a >▏</a>
            <a href="#eventos">Eventos</a>
          </div>

          <div className="col-3 nav-contact desktop-only">
            <a href="#contacto">
              <img src={contacto} alt="Contacto" className="btn-img" />
            </a>
          </div>
        </div>

        {menuOpen && (
         <div className="mobile-only mobile-menu">
          <a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a>
          <a href="#sedes" onClick={() => setMenuOpen(false)}>Sedes</a>
          <a href="#franquicias" onClick={() => setMenuOpen(false)}>Franquicias</a>
          <a href="#eventos" onClick={() => setMenuOpen(false)}>Eventos</a>

          {/* Botón como imagen centrada */}
          <div className="mobile-contact-wrapper">
            <a href="#contacto" onClick={() => setMenuOpen(false)}>
              <img src={contacto} alt="Contacto" className="btn-img" />
            </a>
          </div>
        </div>
        )}
      </div>
    </header>
  );
};

