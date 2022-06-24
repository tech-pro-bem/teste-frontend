import PetGenerator from './layouts/PetGenerator';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <h1>Aplicação super incrível para a geração de animalzinhos </h1>
      <div className={styles.generators}>
        <PetGenerator animalType="Cachorrinho" />
        <PetGenerator animalType="Gatinho" />
      </div>
    </div>
  );
}

export default App;
