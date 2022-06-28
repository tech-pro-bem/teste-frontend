import {Container} from "./components/Container";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Container/>
      </div>
    </>
  );
}

export default App;
