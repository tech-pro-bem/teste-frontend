import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  border-radius: 2rem;
`;

function Image({ api, size, animal }) {
  return (
    <StyledImage src={`${api}/${size.width}/${size.height}`} alt={`Foto gerada randomicamente de um ${animal}`} />
  );
}

Image.propTypes = {
  animal: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  size: PropTypes.objectOf(number).isRequired,
};

export default Image;
