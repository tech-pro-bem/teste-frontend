import React, { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import axios from 'axios';

function App() {
  const [imageKitty, setImageKitty] = useState('');
  const [imageDoggo, setImageDoggo] = useState('');

  const randomNumber = () => {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
  };

  function fetchKitty() {
    try {
      const url = `http://placekitten.com/${randomNumber()}/${randomNumber()}`;

      axios
        .get(url, {
          responseType: 'blob',
        })
        .then(response => {
          setImageKitty(URL.createObjectURL(response.data));
        });
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchDoggo() {
    try {
      const url = `http://place.dog/${randomNumber()}/${randomNumber()}`;
      setImageDoggo(url);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="App">
      <h1>Pet generator</h1>
      <section>
        <Card handle={fetchKitty} image={imageKitty} title={'gerar gatinho'} />
        <Card handle={fetchDoggo} image={imageDoggo} title={'gerar catiorro'} />
      </section>
    </div>
  );
}

export default App;
