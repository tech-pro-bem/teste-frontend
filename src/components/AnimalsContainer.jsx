import React from 'react';
import RandomGenerator from './RandomGenerator';

function AnimalsContainer() {
  return (
    <div>
      <RandomGenerator animal="gato" api="http://placekitten.com" />
      <RandomGenerator animal="cachorro" api="https://place.dog" />
    </div>
  );
}

export default AnimalsContainer;
