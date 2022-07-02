import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Image from './Image';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 1em 0;
`;

function RandomGenerator({ animal }) {
  const [cat, setCat] = useState(parseInt(Math.random() * (16 - 0) + 0, 10));

  const generateNewCat = () => {
    const max = 16;
    const min = 0;

    setCat(
      parseInt(Math.random() * (max - min) + min, 10),
    );
  };

    setSize({
      width: parseInt(Math.random() * (max - min) + min, 10),
      height: parseInt(Math.random() * (max - min) + min, 10),
    });
  };

  return (
    <StyledDiv>
      <Button animal={animal} onClick={generateNewSize} />
      <Image api={api} size={size} animal={animal} />
    </StyledDiv>
  );
}

RandomGenerator.propTypes = {
  animal: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
};

export default RandomGenerator;
