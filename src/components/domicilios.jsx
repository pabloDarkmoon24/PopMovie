import { useEffect, useRef, useState } from 'react';
import paso1 from '../assets/domicilios/Sidle-1 Domicilio.png';
import paso2 from '../assets/domicilios/Sidle-2Domicilio.png';
import paso3 from '../assets/domicilios/Sidle-3-Domicilio.png';
import motorizado from '../assets/domicilios/Motorizado-PopMovie.png';
import '../styles/domicilios.css';

export const Domicilios = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [paso1, paso2, paso3];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: sliderRef.current.offsetWidth * nextIndex,
          behavior: 'smooth',
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.offsetWidth * index,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="domicilio-section">
        <div className="domicilio-container">
            <h2 className="domicilio-title">¿Cómo pedir a domicilio?</h2>
            <p className="domicilio-horario">
            <strong>Lunes a Jueves</strong> // 4:00 pm a 9:00 pm <br />
            <strong>Viernes a Domingo</strong> // 3:00 pm a 11:00 pm
            </p>

            <div className="domicilio-content">
            {/* SLIDER */}
            <div className="domicilio-slider-wrapper">
                <div className="domicilio-slider" ref={sliderRef}>
                {slides.map((img, i) => (
                    <div className="slide-item" key={i}>
                    <img src={img} alt={`Paso ${i + 1}`} />
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

            {/* MOTORIZADO AL LADO */}
            <div className="motorizado-wrapper desktop-only">
                <img src={motorizado} alt="Motorizado PopMovie" />
            </div>
            </div>
        </div>
        </section>
  );
};