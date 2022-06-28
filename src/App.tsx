import { PetGenerator } from "./components/PetGenerator";

function App() {
  return (
    <>
      <PetGenerator url="https://place.dog/300/200" title="Gerar cachorrinho"/>
      <PetGenerator url="http://placekitten.com/200/300" title="Gerar gatinho"/>
    </>
  );
}

export default App;
