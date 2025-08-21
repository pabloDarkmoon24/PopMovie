import { useEffect, useRef, useState } from 'react';
import standImg from '../assets/franquicia/Franquicias-disponibles-banner.png';
import textoRojo from '../assets/franquicia/Pop-movie-un-negocio-que-genera-millones.png';
import textoAmarillo from '../assets/franquicia/negociorentable.png';
import btnSede from '../assets/franquicia/Quiero-mi-sede-boton.png';

import slide1 from '../assets/franquicia/Sidle-1 Franquicias.png';
import slide2 from '../assets/franquicia/Sidle-2-Franquicias.png';
import slide3 from '../assets/franquicia/Sidle-3-Franquicias.png';
import slide4 from '../assets/franquicia/Sidle-4-Franquicias.png';
import slide5 from '../assets/franquicia/Sidle-5-Franquicias.png';
import slide6 from '../assets/franquicia/Sidle-6-Franquicias.png';
import slide7 from '../assets/franquicia/Sidle-7-Franquicias.png';
import slide8 from '../assets/franquicia/Sidle-8-Franquicias.png';
import slide9 from '../assets/franquicia/Sidle-9-Franquicias.png';


import '../styles/franquicia.css'

export const Franquicia = () => {
  const slides = [slide1, slide2, slide3,slide4,slide5,slide6,slide7,slide8,slide9];
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    const slider = sliderRef.current;
    if (slider) {
      const slideWidth = slider.offsetWidth;
      slider.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      goToSlide(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="franquicia-section" id="franquicia">
      <div className="franquicia-container">
        <h2 className="franquicia-titulo">
          ¡Genera ingresos con un negocio <br /> que ya está funcionando!
        </h2>
        <p className="franquicia-subtitulo">
          ¿Y si tu próxima gran historia empieza con crispetas?
        </p>

        <div className="franquicia-grid">
          <div className="franquicia-stand">
            <img src={standImg} alt="Franquicia Stand" />
          </div>

          <div className="franquicia-info">
            <img src={textoRojo} alt="Texto Rojo Franquicia" className="info-img" />
            <div className="franquicia-slider-wrapper">
                    <div className="franquicia-slider" ref={sliderRef}>
                      {slides.map((img, i) => (
                        <div className="slide-item" key={i}>
                          <img src={img} alt={`Franquicia slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>

                    <div className="slider-controls desktop-only">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          className={`dot ${currentIndex === i ? 'active' : ''}`}
                          onClick={() => goToSlide(i)}
                        />
                      ))}
                    </div>
              </div>
            <a 
              href="https://drive.google.com/file/d/1hm7bUpj0vifDP6xPOaIkWGuAqpA0RaAq/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={btnSede} alt="Botón Quiero mi sede" className="btn-franquicia" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};