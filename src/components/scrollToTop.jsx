import { useEffect, useState } from 'react';
import '../styles/scrollToTop.css'; // crea este CSS
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const hero = document.getElementById('inicio');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};
