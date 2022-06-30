import { Content } from '../Content'
import { Container, Heading } from './styled'
import { Cat, Dog } from 'phosphor-react'

export function Main() {
  return (
    <main>
      <Container>
        <Heading>Pet Generate</Heading>
      </Container>

      <Content
        icon={<Cat size={20} />}
        text={'Gerar Gatinho'}
        url={'http://placekitten.com/200/300'}
      />

      <Content
        icon={<Dog size={20} />}
        text={'Gerar Cachorrinho'}
        url={'http://placekitten.com/200/300'}
      />
    </main>
  )
}
