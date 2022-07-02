import './App.css';
import ReusableComponent from './Components/ReusableComponent';

function App() {
  return (
    <div className="App">
      <ReusableComponent url ={'http://placekitten.com'} animal={"gatinho"}/>
    </div>
  );
}

export default App;
