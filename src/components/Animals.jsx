import React from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/auth';

function Animals(props) {
  const { animal } = props;
  const { catAndDog } = React.useContext(AuthContext);

  const handleClickDog = () => {
    console.log(catAndDog.dogImage);
  };

  const handleClickCat = () => {
    console.log(catAndDog.catImage);
  };

  return (
    <>
      <img
        src="https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png"
        alt="Imagem de um gato."
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
