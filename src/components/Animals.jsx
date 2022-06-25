import React from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/auth';

function Animals(props) {
  const { animal } = props;
  const { catAndDog, setCatAndDog } = React.useContext(AuthContext);

  return (
    <>
      <img
        src="https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png"
        alt="Imagem de um gato."
      />
      <button
        type="button"
      >
        {animal}
      </button>
    </>
  );
}

Animals.propTypes = {
  animal: PropTypes.string.isRequired,
};

export default Animals;
