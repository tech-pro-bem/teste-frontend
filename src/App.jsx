import React, { useState, useEffect } from "react";
import { getCats, getDogs } from "./Services/fechApi";
import { Animals } from "./components/Animals";

function App() {
  const [cat, setCat] = useState();
  const [dog, setDog] = useState();

  useEffect(() => {
    getCats().then((res) => {
      setCat(res);
    });

    getDogs().then((res) => {
      setDog(res);
    });
  }, []);

  console.log(getDogs());

  return (
    <div className="App">
      {dog ? (
        <>
          <Animals imagem={cat} btnText="Gerar Gatinho" getMor={setCat} />
          <Animals imagem={dog} btnText="Gerar Cachorro" getMor={setDog} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
