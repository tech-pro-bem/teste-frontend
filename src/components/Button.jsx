import React from 'react';
import PropTypes from 'prop-types';

function Button({ animal, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {`Gerar um novo ${animal}`}
    </button>
  );
}

Button.propTypes = {
  animal: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
