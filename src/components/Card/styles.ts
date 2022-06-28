import styled from "styled-components"

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 .5rem;

    img{
        border-radius: .5rem;
        width: 300px;
        height: 400px;

        @media(max-width: 380px){
            width: 200px;
            height: 300px;
        }
    }

    button{
        cursor: pointer;
        font-size: 1rem;
        max-width: 16rem;
        font-weight: bold;
        letter-spacing: .125rem;
        color: #dedede;
        background-color: #4466ff;
        padding: .5rem 1rem;
        margin: .75rem 0;
        border-radius: .25rem;
        border: .25rem dashed #0000;
        transition: border-color color background-color .2s;

        &:hover{
            border-color: #4466ff;
            color: #4466ff;
            background-color: #0000;
        }

        @media(max-width: 380px){
            font-size: .75rem;
        }
    }
`

export {StyledCard}