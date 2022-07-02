import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Image from './Image';
import Loader from './Loader';
import { getCatImage, getDogImage } from '../utils/api';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 1em 0;
`;

function RandomGenerator({ animal }) {
  const [cat, setCat] = useState(parseInt(Math.random() * (16 - 0) + 0, 10));
  const [animalImage, setAnimalImage] = useState(undefined);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImageURL = async () => {
    if (animal === 'gato') {
      setAnimalImage(await getCatImage(cat));
    } else {
      setAnimalImage(await getDogImage());
    }
    await setLoading(false);
  };

  const generateNewCat = () => {
    const max = 16;
    const min = 0;

    setCat(
      parseInt(Math.random() * (max - min) + min, 10),
    );
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setLoading(true);
    if (animal === 'gato') {
      generateNewCat();
    }
    fetchImageURL();
  }, [count]);

  return (
    <StyledDiv>
      <Button animal={animal} onClick={incrementCount} />
      { loading || !animalImage
        ? <Loader />
        : <Image api={animalImage} animal={animal} />}
    </StyledDiv>
  );
}

RandomGenerator.propTypes = {
  animal: PropTypes.string.isRequired,
};

export default RandomGenerator;
