import { Combos } from "./components/combos";
import { Domicilios } from "./components/domicilios";
import { Footer } from "./components/footer";
import { Franquicia } from "./components/franquicia";
import { Giftcard } from "./components/giftcard";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Redes } from "./components/redes";
import { Sedes } from "./components/sedes";


function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Combos />
      <Giftcard />
      <Domicilios />
      <Sedes />
      <Franquicia />
      <Redes />
      <Footer />
    </>
  );
}

export default App;