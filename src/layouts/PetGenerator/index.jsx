import styles from './style.module.scss';
import Button from '../../components/Button';

function PetGenerator({ animalType }) {
  const animalsAvailable = ['Cachorrinho', 'Gatinho'];
  let animalSelected = '';

  if (!animalsAvailable.find((animal) => animal === animalType)) {
    animalSelected = 'Cachorrinho';
  } else { animalSelected = animalType; }

  return (
    <div className={styles.petGeneratorContainer}>
      <img className={styles.image} src="https://place.dog/300/400" alt="asd" />
      <Button>
        Gerar
        {' '}
        {animalSelected}
      </Button>
    </div>
  );
}

export default PetGenerator;
