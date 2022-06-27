import { useState } from 'react';
import * as C from './styles';
import Button from '../PetButton'
import { urlCat, urlDog } from '../../services/api';

const PetBox = ({buttonType}) => {
    const buttonText = buttonType === 'cat' ? 'Gerar Gatinho' : 'Gerar Cachorrinho';
    const [petImage, setPetImage] = useState();
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        const petFetch = buttonType === 'cat' ? urlCat : urlDog;
        
        try {
            await petFetch().then(data => {
                setPetImage(data);
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    return ( 
    <>
        <C.ImageBox src={petImage} />
        <Button label={buttonText} action={() => handleClick()} loading={loading} />
    </>);
}
 
export default PetBox;