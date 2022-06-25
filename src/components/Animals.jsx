import React from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/auth';
import { catFetch, dogFetch } from '../services/animalsFetch';

function Animals(props) {
  const { animal } = props;
  const { dogImage, setDogImage, catImage,
    setCatImage, setLoading } = React.useContext(AuthContext);

  const handleClickDog = () => {
    setLoading(true);
    dogFetch().then((value) => {
      setDogImage(value);
      setLoading(false);
    });
  };

  const handleClickCat = () => {
    setLoading(true);
    catFetch().then((value) => {
      setCatImage(value);
      setLoading(false);
    });
  };

  return (
    <>
      <img
        src={ animal === 'Gatinho' ? catImage : dogImage }
        alt={ animal === 'Gatinho' ? 'Imagem de um gato.' : 'Imagem de um cachorro.' }
      />
      <button
        type="button"
        onClick={ animal === 'Gatinho' ? handleClickCat : handleClickDog }
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
