import styles from '../src/global.module.scss';
import { FetchImage } from './components/Fetch';
import { Header } from './components/Header';

function App() {
  return(
    <>
    <Header></Header>
    <div>
      <FetchImage animalType='Cachorrinho' imageURL='https://place.dog' />
      <FetchImage animalType='Gatinho' imageURL='http://placekitten.com' />
    </div>
    </>
  );
}

export default App
