import { CgSpinner } from 'react-icons/cg';
import * as C from './styles';

const PetButton = ({action, label, loading}) => {
    
    const handleClick = () => {
        alert('Nenhuma ação definida');
        return;
    }

    return ( 
        <C.Button onClick={action ?? handleClick} disabled={loading}>
            <C.ButtonText>
                { label ?? 'Gerar Pet' }
                { loading && <C.SvgIcon><CgSpinner /></C.SvgIcon> }
            </C.ButtonText>
        </C.Button>
     );
}
 
export default PetButton;