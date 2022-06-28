import { useState } from "react";


export default function useIndex(){

  const [catAndDog, setCatAndDog] = useState({
    cat: 'Gato',
    dog: 'Dog',
  });

  const [dogImage, setDogImage] = useState('https://place.dog/300/200');
  const [catImage, setCatImage] = useState('https://placekitten.com/g/300/200');
  const [loading, setLoading] = useState(false);


  return {
    dogImage,
    setDogImage,
    catImage,
    setCatImage,
    loading,
    setLoading,
    catAndDog
  }

};






