import { useCallback, useEffect, useState } from 'react';
import * as C from './styles';
import Button from '../PetButton'
import { urlCat, urlDog } from '../../services/api';

const PetBox = ({buttonType}) => {
    const buttonText = buttonType === 'cat' ? 'Gerar Gatinho' : 'Gerar Cachorrinho';
    const [petImage, setPetImage] = useState();
    const [loading, setLoading] = useState(false);
    const petUrl = buttonType === 'cat' ? urlCat : urlDog;

    const fetchPet = useCallback(async () => {
        setLoading(true);
        try {
            await petUrl().then(data => {
                setPetImage(data);
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [petUrl]);

    useEffect(() => {
        fetchPet();
    }, [fetchPet]);

    const handleClick = async () => {
        fetchPet();
    }

    return ( 
    <>
        <C.ImageBox src={petImage} />
        <Button label={buttonText} action={() => handleClick()} loading={loading} />
    </>);
}
 
export default PetBox;