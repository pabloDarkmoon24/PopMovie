import santa_rosa from '../assets/sedes/Punto-Santa-Rosa-de-Cabal.png'
import dosquebradas from '../assets/sedes/Punto-dosquebradas.png'
import btnUbicacion from '../assets/sedes/Boton-ver-ubicacion.png'

import imgFlotante1 from '../assets/sedes/Crispeta-flotante-1.png'; 
import imgFlotante2 from '../assets/sedes/Crispeta-flotante-2.png';


import '../styles/sedes.css'


export const Sedes = () => {
    return (
         <section className="sedes-section" id="sedes">
            
            <img src={imgFlotante1} alt="Decoración" className="sede-float float-1" />
            <img src={imgFlotante2} alt="Decoración" className="sede-float float-2" />

            <div className="sedes-container">
                <h2 className="sedes-title">¿Prefieres visitarnos en persona?</h2>
                <p className="sedes-subtitle">
                    ¡Ven a vivir la experiencia PopMovie <br /> directamente en nuestros puntos físicos!
                </p>

                <div className="sedes-grid">
                    <div className="sede-card">
                        <img src={santa_rosa} alt="Sede Santa Rosa" className="sede-img" />
                        <a href="https://maps.google.com/?q=Calle+11+%2313-21+Santa+Rosa+de+Cabal" target="_blank" rel="noopener noreferrer">
                            <img src={btnUbicacion} alt="Ver ubicación" className="sede-btn" />
                        </a>
                    </div>

                    <div className="sede-card">
                        <img src={dosquebradas} alt="Sede Dosquebradas" className="sede-img" />
                        <a href="https://maps.google.com/?q=Molivento+Mall+Dosquebradas" target="_blank" rel="noopener noreferrer">
                            <img src={btnUbicacion} alt="Ver ubicación" className="sede-btn" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}