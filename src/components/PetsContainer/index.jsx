import * as C from './styles';
import PetButton from '../PetButton';

const PetsContainer = () => {
    return ( 
        <C.Container>
            <h1>Pet Generator</h1>
            <PetButton label="Gerar Cachorrinho" loading={true} />
        </C.Container>
     );
}
 
export default PetsContainer;