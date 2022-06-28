import styled from "styled-components"

const StyledTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    user-select: none;

    span{
        font-size: 2.25rem;
        font-family: 'Titan One', cursive;
        color: #db9772;
        text-shadow: -2px 2px 1px #000;

        @media(max-width: 380px){
            font-size: 1.8rem;
        }
    }

    svg{
        color: #803706;
        transform: rotate(40deg);
        font-size: 3rem;

        @media(max-width: 380px){
            display: none;
        }
    }
`

export {StyledTitle}