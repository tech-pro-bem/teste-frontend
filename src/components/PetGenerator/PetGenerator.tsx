import { useEffect, useState } from 'react';
import { getDogImageURL } from '../../services/getDogImageURL';
import { getKittenImageURL } from '../../services/getKittenImageURL';
import { Pet } from '../../types/Pet';
import { Button, ImageWrapper, MainWrapper } from './styles';

interface PetGeneratorProps {
  pet: Pet;
}

function PetGenerator(props: PetGeneratorProps) {

  const [petImageURL, setPetImageURL] = useState<string | null>(null);

  useEffect(() => {
    getPetImageURL();
  }, [])

  async function getPetImageURL() {
    try {
      const url = (props.pet === 'kitten')
        ? await getKittenImageURL()
        : await getDogImageURL()

      setPetImageURL(url);
    }
    catch (error) {
      console.log(error);
    }
  }

  if (!petImageURL) {
    return <div>Carregando...</div>
  }

  return (
    <MainWrapper>
      <ImageWrapper>
        <img src={petImageURL} alt={props.pet} />
      </ImageWrapper>
      <Button onClick={getPetImageURL}>
        Gerar {props.pet === 'kitten' ? 'Gatinho' : 'Cachorrinho'}
      </Button>
    </MainWrapper>
  )
}
export default PetGenerator