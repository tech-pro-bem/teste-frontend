import React from 'react';
import Animals from '../components/Animals';
import { AuthContext } from '../providers/auth';

function App() {
  const { catAndDog, loading } = React.useContext(AuthContext);

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
