import React from 'react';
import Animals from '../components/Animals';
import { AuthContext } from '../providers/auth';

function App() {
  const catAndDog = React.useContext(AuthContext);
  console.log(catAndDog);
  return (
    <>
      <header>
        <h1>Doguinhos e Gatinhos</h1>
      </header>
      <main>
        <Animals />
        <Animals />
      </main>
    </>
  );
}

export default App;
