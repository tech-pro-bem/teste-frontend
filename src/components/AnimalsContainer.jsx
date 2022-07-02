import React from 'react';
import styled from 'styled-components';
import RandomGenerator from './RandomGenerator';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

function AnimalsContainer() {
  return (
    <StyledContainer>
      <RandomGenerator animal="gato" api="http://placekitten.com" />
      <RandomGenerator animal="cachorro" api="https://place.dog" />
    </StyledContainer>
  );
}

export default AnimalsContainer;
