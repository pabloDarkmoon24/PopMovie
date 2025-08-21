import { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import confetti from 'canvas-confetti';
import '../styles/ruleta.css';
import GiftCardComposer from './GiftCardComposer';
import cardBase from '../assets/bono.png';

const data = [
  { option: '10% descuento' },
  { option: 'bolsita gratis' },
  { option: '50% descuento' },
  { option: 'bolsita gratis' },
  { option: 'Mini Fusión' },
  { option: 'Mini Crispetazo' },
  { option: 'Mini Candy' },
  { option: 'Sigue intentando' },
];

export const RuletaPopup = ({ codigo, premioReal, redencionReal, onClose }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [mostrarPremio, setMostrarPremio] = useState(false);

  useEffect(() => {
    if (premioReal) {
      const index = data.findIndex(p => p.option === premioReal);
      if (index !== -1) {
        setPrizeNumber(index);
        setMustSpin(true);
      }
    }
  }, [premioReal]);

  const lanzarConfeti = () => {
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 25,
      spread: 360,
      ticks: 100,
      zIndex: 9999,
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      confetti({ ...defaults, particleCount: 30, origin: { x: Math.random() * 0.3 + 0.1, y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount: 30, origin: { x: Math.random() * 0.3 + 0.6, y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleStopSpinning = () => {
    setMostrarPremio(true);
    lanzarConfeti();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="cerrar" onClick={onClose}>X</button>

        <div className="ruleta-wrapper">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={['#ffcc99', '#fff4de']}
            textColors={['#3a1f0b']}
            onStopSpinning={handleStopSpinning}
            outerBorderColor="#9b1f24"
            outerBorderWidth={6}
            radiusLineColor="#fff"
            radiusLineWidth={2}
            fontSize={15}
          />
        </div>

        {mostrarPremio && (
          <div className="premio-box">
            <h3>¡Felicidades!<br />Ganaste: {data[prizeNumber].option}</h3>
            <div className="giftcard-fake">
              <GiftCardComposer
                baseImage={cardBase}
                premio={premioReal}
                codigo={redencionReal}
                options={{
                      // Si quieres forzar tamaño de salida (opcional)
                      width: 200,
                      height: 90,
                      qualityScale: 2,
                      downloadName: 'giftcard-ejemplo.png',
                      prize: {
                        xPct: 32,
                        yPct: 46,
                        maxWidthPct: 70,
                        font: 'bold 7px "CCTimSaleLower Bold", Arial, sans-serif',
                        color: '#9b1f24',
                        align: 'center',
                        lineHeight: 1.12,
                        shadow: { blur: 6, color: 'rgba(0,0,0,0.25)', offsetX: 0, offsetY: 2 }
                      },
                      code: {
                        xPct: 30,
                        yPct: 85,
                        maxWidthPct: 80,
                        font: 'bold 9px "Gasoek One", Arial, sans-serif',
                        color: '#3a1f0b',
                        align: 'center',
                        shadow: { blur: 0, color: 'transparent', offsetX: 0, offsetY: 0 }
                      }
                    }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};