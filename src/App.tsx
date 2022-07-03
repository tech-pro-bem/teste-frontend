import GeneratorComponent from "./components/generator";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Container, Content } from './components/layout/styles';
import { FaPaw } from 'react-icons/fa';

const App = () => {
  return (
    <div>
      <Container>
        <GlobalStyle/>
        <h1><FaPaw style={{marginRight: '1rem'}}/> Gerador de Pets</h1>
        <Content>
          <GeneratorComponent animal="cachorro"/>
          <GeneratorComponent animal="gato"/>
        </Content>
      </Container>
    </div>
    
  );
}

export default App;
