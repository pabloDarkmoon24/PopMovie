import { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import confetti from 'canvas-confetti';
import '../styles/ruleta.css';

const data = [
  { option: 'Disney+' },
  { option: 'Netflix' },
  { option: 'Sigue intentando' },
  { option: 'Amazon Prime' },
  { option: 'PopFusion' },
  { option: 'Palomitas' },
  { option: '$10.000' },
  { option: '2x1' },
  { option: 'Crispetazo' },
  { option: 'bono 1 usd' },
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
              <p>Código para reclamar en nuestras sedes: <strong>{redencionReal}</strong></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};