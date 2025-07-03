import '../styles/combos.css';


import combo1 from '../assets/combos/Combo-crispetazo.png';
import btn1 from '../assets/combos/Boton-CTA-combo-crispetazo.png';

import combo2 from '../assets/combos/Combo-candy-pop.png';
import btn2 from '../assets/combos/Boton-CTA-combo-candypop.png';

import combo3 from '../assets/combos/Combo-pop-fusion.png';
import btn3 from '../assets/combos/Boton-CTA-combo-popfusion.png';

import combo4 from '../assets/combos/combo-mini-cripsetazo.png';
import btn4 from '../assets/combos/Boton-CTA-combo-minicrispetazo.png';

import combo5 from '../assets/combos/Combo-mini-candy-pop.png';
import btn5 from '../assets/combos/Boton-CTA-combo-minicandypop.png';

import combo6 from '../assets/combos/Combo-mini-pop-fusion.png';
import btn6 from '../assets/combos/Boton-CTA-combo-minipofusion.png';

import combo7 from '../assets/combos/Combo-mega-pop.png';
import btn7 from '../assets/combos/Boton-CTA-combo-megapop.png';

import amigos from '../assets/combos/amigos.png'

import imgToscano from '../assets/combos/Toping-toscano.png';
import imgTris from '../assets/combos/cheese-tris.png';
import imgDoritos from '../assets/combos/Doritos.png';
import imgNachos from '../assets/combos/Nachos.png';
import imgCheddar from '../assets/combos/Queso-chedar.png';

import imgFlotante1 from '../assets/chocolatina-flotante.png'
import imgFlotante2 from '../assets/queso-flotante.png'


export const Combos = () => {
  return (
    <>
    <section className="combos-section" id="combos">
        <img src={imgFlotante2} alt="Decoración" className="sede-float float1" />
        <img src={imgFlotante1} alt="Decoración" className="sede-float float2" />
      <div className="combos-container">
        <h2 className="combos-titulo">Nuestros combos están de película</h2>
        <p className="combos-subtitulo">
          Tenemos combos tan buenos que vas a querer <br /> pausarlo todo solo para seguir comiendo.
        </p>

        <div className="combos-grid">
            <div className="combo-card">
                <img src={combo1} alt="Combo Crispetazo" className="combo-img" />
                <a href="https://linktr.ee/Popmovie_" target="_blank" rel="noopener noreferrer">
                <img src={btn1} alt="Botón Crispetazo" className="combo-btn" />
                </a>
            </div>

            <div className="combo-card">
                <img src={combo2} alt="Combo Candy Pop" className="combo-img" />
                <a href="https://linktr.ee/Popmovie_" target="_blank" rel="noopener noreferrer">
                <img src={btn2} alt="Botón Candy Pop" className="combo-btn" />
                </a>
            </div>

            <div className="combo-card">
                <img src={combo3} alt="Combo Pop Fusión" className="combo-img" />
                <a href="https://linktr.ee/Popmovie_" target="_blank" rel="noopener noreferrer">
                <img src={btn3} alt="Botón Pop Fusión" className="combo-btn" />
                </a>
            </div>

            <div className="combo-card">
                <img src={combo4} alt="Combo Crispetazo Mini" className="combo-img" />
                <a href="https://linktr.ee/Popmovie_" target="_blank" rel="noopener noreferrer">
                <img src={btn4} alt="Botón Mini Crispetazo" className="combo-btn" />
                </a>
            </div>

            <div className="combo-card">
                <img src={combo5} alt="Combo Mini Candy Pop" className="combo-img" />
                <a href="https://linktr.ee/Popmovie_" target="_blank" rel="noopener noreferrer">
                <img src={btn5} alt="Botón Mini Candy Pop" className="combo-btn" />
                </a>
            </div>

            <div className="combo-card">
                <img src={combo6} alt="Combo Mini Pop Fusión" className="combo-img" />
                <a href="https://linktr.ee/Popmovie_" target="_blank" rel="noopener noreferrer">
                <img src={btn6} alt="Botón Mini Pop Fusión" className="combo-btn" />
                </a>
            </div>

            <div className="combo-card">
                <img src={combo7} alt="Combo Mega Pop" className="combo-img" />
                <a href="https://linktr.ee/Popmovie_" target="_blank" rel="noopener noreferrer">
                <img src={btn7} alt="Botón Mega Pop" className="combo-btn" />
                </a>
            </div>

            <div className="combo-grande-card">
                <img src={amigos} alt="Amigos y PopMovie" className="combo-grande-img" />
            </div>
        </div>
      </div>
    </section>

    <section className="toppings-section">
        <div className="toppings-container">
            <h2 className="toppings-titulo">¡También puedes agregar toppings!</h2>
            <p className="toppings-subtitulo">Hazlo a tu manera: agrégale algo extra</p>

            <div className="toppings-grid">
            <div className="topping-left">
                <img src={imgToscano} alt="Topping Pop Toscano" className="topping-toscano" />
            </div>
            <div className="topping-right">
                <img src={imgTris} alt="Cheese Tris" className="topping-item" />
                <img src={imgDoritos} alt="Doritos" className="topping-item" />
                <img src={imgNachos} alt="Nachos" className="topping-item" />
                <img src={imgCheddar} alt="Queso Cheddar" className="topping-item" />
            </div>
            </div>
        </div>
    </section>
    </>
  );
};