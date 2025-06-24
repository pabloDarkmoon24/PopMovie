import '../styles/hero.css';
import muneco from '../assets/Poppy-las-del-cine-pero-en-tu-casa.png';
import participa from '../assets/Boton-participa-y-gana.png';
import '../styles/grid.css';
import { useState } from 'react';
import { RuletaPopup } from './RuletaPopup';
import { db } from '../firebase';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';

export const Hero = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [codigoInput, setCodigoInput] = useState('');
  const [premioReal, setPremioReal] = useState(null);
  const [redencion, setRedencion] = useState('');

  const handleButtonClick = async () => {
    try {
      const q = query(
        collection(db, 'PopMovie'),
        where('codigo_ingresado', '==', codigoInput)
      );

      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const codigoDoc = snapshot.docs[0];
        const data = codigoDoc.data();

        if (data.usado === false) {
          setPremioReal(data.premio);
          setRedencion(data.codigo_redencion);
          setPopupVisible(true);

          // Cambiar el campo "usado" a true en Firestore
          const docRef = doc(db, 'PopMovie', codigoDoc.id);
          await updateDoc(docRef, { usado: true });
        } else {
          alert('Este código ya fue usado.');
        }
      } else {
        alert('Código inválido. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al consultar el código:', error);
      alert('Hubo un problema. Intenta más tarde.');
    }
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
                value={codigoInput}
                onChange={(e) => setCodigoInput(e.target.value)}
              />
              <button onClick={handleButtonClick}>¡A ver qué me tocó!</button>
            </div>
            <p className="texto-pie">Una caja, un código, un clic… <br />y pop</p>
          </div>
        </div>

        {popupVisible && (
          <RuletaPopup
            codigo={codigoInput}
            premioReal={premioReal}
            redencionReal={redencion}
            onClose={() => setPopupVisible(false)}
          />
        )}
      </div>
    </section>
  );
};
