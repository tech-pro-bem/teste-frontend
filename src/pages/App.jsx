import React, { useState } from 'react';
import Animals from '../components/Animals';
import { AuthContext } from '../providers/auth';
import { catFetch, dogFetch } from '../services/animalsFetch';

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
    <>
      <header>
        <h1>Doguinhos e Gatinhos</h1>
      </header>
      <main>
        <Animals animal={ catAndDog.cat } />
        <Animals animal={ catAndDog.dog } />
        <p>{loading && 'Loading...'}</p>
      </main>
    </>
  );
}

export default App;
