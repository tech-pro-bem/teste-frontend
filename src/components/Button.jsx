import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Ref.: https://cssbuttons.app/buttons/3
const StyledButton = styled.button`
  display: inline-block;
  background-color: rgb(49, 102, 148);
  padding: 1em 1.7em;
  margin: 0 0.1em 0.1em 0;
  border: 0.3em solid rgb(255, 255, 255);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
  text-align: center;
  transition: all 0.2s;
  &:hover {
    color: black;
    background-color: rgb(100, 153, 200);
  }
`;

function Button({ animal, onClick }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {`Gerar um novo ${animal}`}
    </StyledButton>
  );
}

Button.propTypes = {
  animal: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
