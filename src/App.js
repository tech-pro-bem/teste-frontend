import PetGenerator from "./components/PetGenerator";

function App() {
  return (
    <div className="App">
      <PetGenerator pet="dog" />
      <PetGenerator pet="cat" />
    </div>
  );
}

export default App;
