import './App.css';
import ReusableComponent from './Components/ReusableComponent';

function App() {
  return (
    <div className="App">
      <ReusableComponent url={'http://placekitten.com'} animal={'Gatinho'}/>
      <ReusableComponent url={'https://placedog.p.rapidapi.com/300/200'}  animal={'Cachorro'}/>
    </div>
  );
}

export default App;
