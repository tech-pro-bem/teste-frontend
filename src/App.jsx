import React, { useState, useEffect } from "react";
import { getCats } from "./Services/fechApi";
import { Animals } from "./components/Animals";

function App() {
  const [cat, setCat] = useState();

  console.log(cat);

  useEffect(() => {
    getCats().then((res) => {
      setCat(res);
    });
  }, []);

  return (
    <div className="App">
      {cat && (
        <Animals imagem={cat} btnText="Gerar Gatinho" getMorCats={setCat} />
      )}
    </div>
  );
}

export default App;
