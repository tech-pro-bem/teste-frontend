import PetGenerator from './components/PetGenerator'
import { Container, PetSectionWrapper, Title, Wrapper } from './styles/App.styles'

function App() {
  return (
    <Wrapper>
      <Container>
        <Title>Pet Generator</Title>
        <PetSectionWrapper>
          <PetGenerator pet='kitten' />
          <PetGenerator pet='dog' />
        </PetSectionWrapper>
      </Container>
    </Wrapper>
  )
}
export default App