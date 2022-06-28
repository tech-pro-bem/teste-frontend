import { Card } from "./components/Card";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Card type="dog"/>
      </div>
      <div className="App">
        <Card type="cat"/>
      </div>
    </>
  );
}

export default App;
