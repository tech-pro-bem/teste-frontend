import styled from "styled-components";

const Header = () => (
    <>
        <header>
            <StyledH1>Pet Generator</StyledH1>
        </header>
    </>
)

const StyledH1 = styled.h1`
    font-size: 70px;
    font-weight: bolder;
    padding: 5px;
    background-image: radial-gradient(ellipse, #553c9a, #ee4b2b);
    color: transparent;
    background-clip: text;
`

export default Header