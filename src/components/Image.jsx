import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  border-radius: 2rem;
`;

function Image({ api, animal }) {
  return (
    <StyledImage src={api} alt={`Foto gerada randomicamente de um ${animal}`} />
  );
}

Image.propTypes = {
  animal: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
};

export default Image;
