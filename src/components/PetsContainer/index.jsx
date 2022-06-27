import PetBox from '../PetBox';
import * as C from './styles';

const PetsContainer = () => {
    return ( 
        <C.Container>
            <h1>Pet Generator</h1>

            <PetBox buttonType="cat" />
        
            <PetBox buttonType="dog" />
        </C.Container>
     );
}
 
export default PetsContainer;