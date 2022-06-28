import { Pet } from '../../types/Pet';
import { Button, ImageWrapper, MainWrapper } from './styles';

interface PetGeneratorProps {
  pet: Pet;
}

function PetGenerator(props: PetGeneratorProps) {

  return (
    <MainWrapper>
      <ImageWrapper>
        {props.pet === 'kitten'
          ? <img src={'http://placekitten.com/200/300'} alt={props.pet} />
          : <img src={'https://place.dog/300/200'} alt={props.pet} />
        }
      </ImageWrapper>
      <Button onClick={() => { }}>
        Gerar {props.pet === 'kitten' ? 'Gatinho' : 'Cachorrinho'}
      </Button>
    </MainWrapper>
  )
}
export default PetGenerator