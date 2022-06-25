import React from 'react';
import Animals from '../components/Animals';
import { AuthContext } from '../providers/auth';

function App() {
  const context = React.useContext(AuthContext);
  return (
    <>
      <header>
        <h1>Doguinhos e Gatinhos</h1>
      </header>
      <main>
        <Animals animal={ context.catAndDog.cat } />
        <Animals animal={ context.catAndDog.dog } />
      </main>
    </>
  );
}

export default App;
