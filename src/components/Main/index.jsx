import { useState } from 'react'
import { Cat, Dog } from 'phosphor-react'
import { Content } from '../Content'
import { Container, Heading } from './styled'
import { generateSize } from '../../../utils/generateSize'

const INITIAL_STATE = {
  dog: {
    height: 300,
    width: 300
  },

  cat: {
    height: 300,
    width: 300
  }
}

export function Main() {
  const [size, setSize] = useState(INITIAL_STATE)

  function generateAnimal(animal = 'dog') {
    const { height, width } = generateSize()

    setSize(state => {
      return animal === 'dog'
        ? { ...state, dog: { height, width } }
        : { ...state, cat: { height, width } }
    })
  }

  return (
    <main>
      <Container>
        <Heading>Pet Generate</Heading>
      </Container>

      <Content
        icon={<Cat size={20} />}
        text={'Gerar Gatinho'}
        url={`http://placekitten.com/${size.cat.width}/${size.cat.height}`}
        onClick={() => generateAnimal('cat')}
      />

      <Content
        icon={<Dog size={20} />}
        text={'Gerar Cachorrinho'}
        url={`https://place.dog/${size.dog.width}/${size.dog.height}`}
        onClick={() => generateAnimal('dog')}
      />
    </main>
  )
}
