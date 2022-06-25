import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AuthContext } from '../providers/auth';

function Animals(props) {
  const { animal } = props;
  const { catImage, setCatImage, dogImage, setDogImage } = React.useContext(AuthContext);

  useEffect(() => {
    if (animal === 'Gatinhos') {
      axios.get('http://placekitten.com/300/300', { responseType: 'blob' })
        .then((response) => {
          const image = URL.createObjectURL(response.data);
          setCatImage(image);
        });
    }

    axios.get('https://cors-anywhere.herokuapp.com/place.dog/300/200', { responseType: 'blob' })
      .then((response) => {
        const image = URL.createObjectURL(response.data);
        setDogImage(image);
      });
  }, []);

  const handleClickDog = () => {
    console.log(dogImage);
  };

  const handleClickCat = () => {
    console.log(catImage);
  };

  return (
    <>
      <img
        src={ animal === 'Gatinhos' ? catImage : dogImage }
        alt={ animal === 'Gatinhos' ? 'Imagem de um gato.' : 'Imagem de um cachorro.' }
      />
      <button
        type="button"
        onClick={ animal === 'Gatinhos' ? handleClickCat : handleClickDog }
      >
        Gerar
        {' '}
        {animal}
      </button>
    </>
  );
}

Animals.propTypes = {
  animal: PropTypes.string.isRequired,
};

export default Animals;
