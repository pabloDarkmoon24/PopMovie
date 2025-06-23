import '../styles/redes.css';

import img1 from '../assets/redes/Pot-1-pop-movie.png';
import img2 from '../assets/redes/Pot-2-pop-movie.png';
import img3 from '../assets/redes/Video-1-Pop-Movie.png';
import img4 from '../assets/redes/Video-2-PopMovie.png';
import img5 from '../assets/redes/Video-3-PopMovie.png';
import img6 from '../assets/redes/Video-4-pop-movie.png';


export const Redes = () => {
    return (
        <section className="redes-section" id="redes">
        <div className="redes-container">
            <h2 className="redes-title">Nuestras redes</h2>

            <div className="redes-grid">

            <div className="fila fila-superior">
                <a href="https://www.instagram.com/p/DJ64YO-KxOR/" target="_blank" rel="noopener noreferrer">
                <img src={img3} alt="Post 1" className="redes-img" />
                </a>
                <a href="https://www.instagram.com/p/DJk4p_CtAdm/" target="_blank" rel="noopener noreferrer">
                <img src={img4} alt="Post 2" className="redes-img" />
                </a>
                <a href="https://www.instagram.com/p/DF0tL_dtSWH/" target="_blank" rel="noopener noreferrer">
                <img src={img5} alt="Post 3" className="redes-img" />
                </a>
            </div>

            <div className="fila fila-inferior">
                <div className="col-grande">
                <a href="https://www.instagram.com/p/DIMZ-E8MvOC/" target="_blank" rel="noopener noreferrer">
                    <img src={img1} alt="Post 4" className="redes-img" />
                </a>
                </div>
                <div className="col-cuadricula">
                <a href="https://www.instagram.com/p/DBkGG9yRf62/" target="_blank" rel="noopener noreferrer">
                    <img src={img2} alt="Post 5" className="redes-img" />
                </a>
                <a href="https://www.instagram.com/p/DAbyWFLC3rs/" target="_blank" rel="noopener noreferrer">
                    <img src={img6} alt="Post 6" className="redes-img" />
                </a>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
    };