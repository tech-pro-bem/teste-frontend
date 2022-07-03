
import styled from "styled-components"

const Button = ({ animal, onClick, setFade }) => (

    <StyledButton 
        type="button" 
        onClick={event => {
            onClick()
            setFade()
    }}>
                {animal}
    </StyledButton>
)

const StyledButton = styled.button`
    font-size: 2em;
    margin: 60px 0;
    border-radius: 30px;
    border: none;
    padding: 15px;
    transition: 300ms;

    &:hover {
        cursor: pointer;
        font-weight: bolder;
    }


`

export default Button