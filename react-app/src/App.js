import './App.css';
import ReusableComponent from './Components/ReusableComponent';

function App() {
  return (
    <div className="App">
      <ReusableComponent url={'http://placekitten.com'} animal={'gatinho'}/>
      <ReusableComponent url={'https://place.dog'} animal={'cachorro'}/>
    </div>
  );
}

export default App;
