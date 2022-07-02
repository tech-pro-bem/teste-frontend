import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Image from './Image';

function RandomGenerator({ animal, api }) {
  const [size, setSize] = useState({ width: 200, height: 300 });

  const generateNewSize = () => {
    const max = 500;
    const min = 200;

    setSize({
      width: parseInt(Math.random() * (max - min) + min, 10),
      height: parseInt(Math.random() * (max - min) + min, 10),
    });
  };

  return (
    <div>
      <Button animal={animal} onClick={generateNewSize} />
      <Image api={api} size={size} animal={animal} />
    </div>
  );
}

RandomGenerator.propTypes = {
  animal: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
};

export default RandomGenerator;
