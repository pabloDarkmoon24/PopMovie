import '../styles/hero.css';
import muneco from '../assets/Poppy-las-del-cine-pero-en-tu-casa.png';
import participa from '../assets/Boton-participa-y-gana.png';
import '../styles/grid.css';

import { useState } from 'react';
import { RuletaPopup } from './RuletaPopup';
import { db } from '../firebase';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  addDoc,
} from 'firebase/firestore';

export const Hero = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [codigoInput, setCodigoInput] = useState('');
  const [premioReal, setPremioReal] = useState(null);
  const [redencion, setRedencion] = useState('');
  const [formData, setFormData] = useState({ nombre: '', correo: '', telefono: '' });
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^\d{10}$/;

    return (
      formData.nombre.trim().length >= 2 &&
      correoRegex.test(formData.correo) &&
      telefonoRegex.test(formData.telefono)
    );
  };

  const handleButtonClick = async () => {
    if (!validateForm()) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }

    try {
      // 1. Guardar los datos del usuario
      await addDoc(collection(db, 'RegistrosUsuarios'), {
        nombre: formData.nombre,
        correo: formData.correo,
        telefono: formData.telefono,
        codigo_ingresado: codigoInput,
        timestamp: new Date()
      });

      // 2. Buscar el código
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

          // 3. Marcar el código como usado
          const docRef = doc(db, 'PopMovie', codigoDoc.id);
          await updateDoc(docRef, { usado: true });
        } else {
          alert('Este código ya fue usado.');
        }
      } else {
        alert('Código inválido. Intenta nuevamente.');
      }
    } catch (error) {
  console.error('🔥 Error en handleButtonClick:', error.message, error);
  alert(`Error técnico: ${error.message}`);
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
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={formData.correo}
                onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Teléfono (10 dígitos)"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              />
              <input
                type="text"
                placeholder="Código secreto"
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
