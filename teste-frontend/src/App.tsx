import { FetchImage } from './components/FetchImage'
import { AppContainer } from './styles/AppWrapper'


function App() {
  return (
    <AppContainer>
      <FetchImage animalType='Cachorrinho' imageURL='https://place.dog' />
      <FetchImage animalType='Gatinho' imageURL='http://placekitten.com' />
    </AppContainer>
  );
}

export default App;
