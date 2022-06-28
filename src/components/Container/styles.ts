import styled from "styled-components"

const StyledContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    max-width: 720px;
    margin: 6rem auto 6rem;

    @media(max-width: 720px){
        grid-template-columns: none;
        grid-template-rows: repeat(2, 1fr);
        gap: 4rem;
    }
`

export {StyledContainer}