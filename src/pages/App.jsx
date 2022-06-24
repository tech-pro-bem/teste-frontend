import React from 'react';
import Cats from '../components/Cats';
import Dogs from '../components/Dogs';

function App() {
  return (
    <>
      <header>
        <h1>Doguinhos e Gatinhos</h1>
      </header>
      <main>
        <Cats />
        <Dogs />
      </main>
    </>
  );
}

export default App;
