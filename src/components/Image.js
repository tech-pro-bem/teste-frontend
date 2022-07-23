import styled from "styled-components"

const Image = ({ image, alt, fade }) => {

    // const [ fade, setFade ] = useState('')

    const FinalStyledImage = () => {
        return <StyledImage fade={fade} src={image} alt={alt} />
    }

    return (
        
        <FinalStyledImage />
    )
}

const StyledImage = styled.img`
    border-radius: 50%;
    width: 300px;
    height: 300px;
    animation: ${props => props.fade} 2s;
`

export default Image