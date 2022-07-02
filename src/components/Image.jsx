import React from 'react';
import PropTypes, { number } from 'prop-types';

function Image({ api, size, animal }) {
  return (
    <img src={`${api}/${size.width}/${size.height}`} alt={`Foto gerada randomicamente de um ${animal}`} />
  );
}

Image.propTypes = {
  animal: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  size: PropTypes.objectOf(number).isRequired,
};

export default Image;
