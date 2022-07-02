import React, { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {
  const [image, setImage] = useState('');

  const randomNumber = () => {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
  };

  function useFetch() {
    try {
      const url = `http://placekitten.com/${randomNumber()}/${randomNumber()}`;
      setImage(url);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Card handle={useFetch} image={image} title={'gerar gatinho'} />
    </div>
  );
}

export default App;
