import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PetGenerator } from "./components/PetGenerator";

function App() {
  return (
    <>
      <Header/>
      <PetGenerator url="https://place.dog/300/200" title="Gerar cachorrinho"/>
      <PetGenerator url="http://placekitten.com/200/300" title="Gerar gatinho"/>
      <Footer/>
    </>
  );
}

export default App;
