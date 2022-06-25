import {
  useState, useCallback, useMemo,
} from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';

import styles from './style.module.scss';
import Button from '../../components/Button';

function PetGenerator({ animalType }) {
  const animalsAvailable = useMemo(() => ({
    Cachorrinho: 'https://place.dog/300/400',
    Gatinho: 'http://placekitten.com/g/300/400',
  }), []);

  const [animalImage, setAnimalImage] = useState(animalType === 'Cachorrinho'
    ? animalsAvailable.Cachorrinho : animalsAvailable.Gatinho);

  const fetchImage = useCallback(async () => {
    const url = animalsAvailable[animalType];

    try {
      const response = await axios.get(url, {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
        withCredentials: false,
        responseType: 'arraybuffer',
      });
      const image = Buffer.from(response.data, 'binary').toString('base64');
      setAnimalImage(`data:image/jpeg;base64,${image}`);
    } catch (e) {
      console.error(e);
    }
  }, [animalType, animalsAvailable]);

  const handleClick = async () => {
    await fetchImage();
  };

  return (
    <div className={styles.petGeneratorContainer}>
      <img className={styles.image} src={animalImage} alt="asd" />
      <Button onClick={handleClick}>
        Gerar
        {' '}
        {animalType}
      </Button>
    </div>
  );
}

export default PetGenerator;
