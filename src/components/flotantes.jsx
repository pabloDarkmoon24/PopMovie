import { useEffect, useRef } from 'react';
import chocolateImg from '../assets/chocolatina-flotante.png';
import quesoImg from '../assets/queso-flotante.png';
import '../styles/flotantes.css';

export const Flotantes = () => {
  const chocolateRef = useRef(null);
  const quesoRef = useRef(null);

  // Velocidades almacenadas como referencias
  const chocolateDir = useRef({ x: 0.1, y: 0.1 });
  const quesoDir = useRef({ x: -0.1, y: 0.1 });

  const moveElement = (ref, dirRef) => {
    const pos = { x: Math.random() * 80, y: Math.random() * 80 };

    const animate = () => {
      const el = ref.current;
      const dir = dirRef.current;
      if (!el) return;

      pos.x += dir.x;
      pos.y += dir.y;

      // rebote en límites
      if (pos.x <= 0 || pos.x >= 90) dir.x *= -1;
      if (pos.y <= 0 || pos.y >= 90) dir.y *= -1;

      el.style.left = `${pos.x}%`;
      el.style.top = `${pos.y}%`;

      requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    moveElement(chocolateRef, chocolateDir);
    moveElement(quesoRef, quesoDir);
  }, []);

  // invierte la dirección al hacer clic
  const reverseDirection = (dirRef) => {
    dirRef.current.x *= -1;
    dirRef.current.y *= -1;
  };

  return (
    <>
      <img
        src={chocolateImg}
        alt="Chocolate"
        className="flotante bounce"
        ref={chocolateRef}
        onClick={() => reverseDirection(chocolateDir)}
      />
      <img
        src={quesoImg}
        alt="Queso"
        className="flotante bounce"
        ref={quesoRef}
        onClick={() => reverseDirection(quesoDir)}
      />
    </>
  );
};
