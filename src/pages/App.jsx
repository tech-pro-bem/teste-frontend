import React, { useState } from 'react';
import Animals from '../components/Animals';
import { AuthContext } from '../providers/auth';
import { catFetch, dogFetch } from '../services/animalsFetch';
import * as S from '../styles/App';

function App() {
  const { catAndDog, loading,
    setDogImage, setCatImage } = React.useContext(AuthContext);

  useState(() => {
    const dogInitialImage = () => {
      dogFetch().then((value) => {
        setDogImage(value);
      });
    };

    const catInitialImage = () => {
      catFetch().then((value) => {
        setCatImage(value);
      });
    };

    dogInitialImage();
    catInitialImage();
  }, []);

  return (
    <S.AllApp>
      <S.ContainerApp>
        <S.HeaderApp>
          <h1>Doguinhos e Gatinhos</h1>
        </S.HeaderApp>
        <main>
          <S.DivApp>
            <Animals animal={ catAndDog.cat } />
            <Animals animal={ catAndDog.dog } />
          </S.DivApp>
          <S.DivApp>
            <p>{loading && 'Carregando..'}</p>
          </S.DivApp>
        </main>
      </S.ContainerApp>
    </S.AllApp>
  );
}

export default App;
