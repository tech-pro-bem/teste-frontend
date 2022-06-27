import { CgSpinner } from 'react-icons/cg';
import * as C from './styles';

const PetButton = (props) => {
    
    const handleClick = () => {
        alert('Nenhuma ação definida');
        return;
    }

    return ( 
        <C.Button onClick={props.action ?? handleClick} disabled={props.loading}>
            <C.ButtonText>
                { props.label ?? 'Gerar Pet' }
                { props.loading && <C.SvgIcon><CgSpinner /></C.SvgIcon> }
            </C.ButtonText>
        </C.Button>
     );
}
 
export default PetButton;