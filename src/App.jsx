import React, { useState, useEffect } from "react";
import { getCats, getDogs } from "./Services/fechApi";
import { Animals } from "./components/Animals/Animals";
import { Container } from "./styled";

function App() {
  const [cat, setCat] = useState();
  const [dog, setDog] = useState();
  const [loadingCat, setLoadingCat] = useState(false);
  const [loadingDog, setLoadingDog] = useState(false);

  useEffect(() => {
    getCats().then((res) => {
      setCat(res);
    });

    getDogs().then((res) => {
      setDog(res);
    });
  }, []);

  return (
    <Container>
      <div className="container-logo">
        <img
          src="https://techprobem.com.br/wp-content/uploads/2021/10/tpb2logo-8-1024x511.png"
          alt="logo tech pro bem"
        />
      </div>
      <div className="container-animals">
        {dog ? (
          <>
            <Animals
              imagem={cat}
              btnText="Gerar Gatinho"
              getMor={setCat}
              setLoading={setLoadingCat}
              loading={loadingCat}
            />
            <Animals
              imagem={dog}
              btnText="Gerar Cachorro"
              getMor={setDog}
              setLoading={setLoadingDog}
              loading={loadingDog}
            />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
}

export default App;
