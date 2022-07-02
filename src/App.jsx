import GeneratorComponent from "./components/generator";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Container } from './components/layout/styles';

const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <h1>Gerador de Pets</h1>
      <GeneratorComponent animal="cachorro"/>
      <GeneratorComponent animal="gato"/>
    </Container>
  );
}

export default App;
