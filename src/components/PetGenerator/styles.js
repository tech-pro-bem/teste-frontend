import styled from "styled-components";

export const PetGeneratorContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:10px;
     button{
        cursor: pointer;
        background-color: var(--button-background);
        border: none;
        border-radius: 3px;
        padding: 5px 15px;
        margin-top: 15px;
    }

    button:hover{
        background-color: var(--hover-button-background);
    }

    img{
        border-radius: 3px;
    }

`