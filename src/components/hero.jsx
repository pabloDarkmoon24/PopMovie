import '../styles/hero.css';
import muneco from '../assets/Poppy-las-del-cine-pero-en-tu-casa.png';
import participa from '../assets/Boton-participa-y-gana.png';
import '../styles/grid.css'
import { useState } from 'react';
import { RuletaPopup } from './ruletaPopup';

export const Hero = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [codigo, setCodigo] = useState('');
  const [premio, setPremio] = useState(null);

  const handleButtonClick = () => {
    // Aquí simulamos que según el código el premio es fijo
    const premiosPorCodigo = {
      ABC123: 'Netflix',
      XYZ789: 'Disney+',
      DEF456: '$10.000',
    };

    const premioObtenido = premiosPorCodigo[codigo.trim()] || 'Sigue intentando';

    setPremio(premioObtenido);
    setPopupVisible(true);
  };

  return (
    <section className="hero-section" id="inicio">
      <div className="container">
        <div className="row hero-content">
          <div className="col-6 col-sm-12 hero-left">
            <img src={muneco} alt="Muñeco PopMovie" className="hero-muneco" />
          </div>

          <div className="col-6 col-sm-12 hero-right">
            <img src={participa} alt="Participa y gana" className="participa-img" />

            <div className="codigo-box">
              <p className="texto-codigo">
                Ingresa el código secreto y descubre si eres uno de nuestros ganadores del mes.
              </p>
              <input
                type="text"
                placeholder="Digita aquí tu código"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
              <button onClick={handleButtonClick}>¡A ver qué me tocó!</button>
            </div>
            <p className="texto-pie">Una caja, un código, un clic… <br />y pop</p>
          </div>
        </div>

        {popupVisible && (
          <RuletaPopup
            codigo={codigo}
            premioReal={premio}
            onClose={() => setPopupVisible(false)}
          />
        )}
      </div>
    </section>
  );
};