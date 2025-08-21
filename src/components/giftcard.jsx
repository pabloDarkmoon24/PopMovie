import imgGiftcard from '../assets/giftcard/Banner-Giftcards.png';
import imgBotonGiftcard from '../assets/giftcard/Boton-Giftcards.png';
import '../styles/giftcard.css'

export const Giftcard = () => {
   return (
    <section className="giftcard-section" id="giftcard">
      <div className="giftcard-container">
        <h2 className="giftcard-title">Ya tienes las crispetas...<br />¿Pero te falta la peli?</h2>
        <p className="giftcard-subtitle">
          Agrega una GiftCard y convierte cualquier plan<br />
          en una experiencia completa.
        </p>
        <img src={imgGiftcard} alt="Sección Giftcard" className="giftcard-main-img" />
        <a href="https://linktr.ee/Popmovie_" target="_blank" rel="noopener noreferrer">
          <img src={imgBotonGiftcard} alt="Botón pedir Giftcard" className="giftcard-button-img" />
        </a>
      </div>
    </section>
  );
};