import styled from "styled-components";
import catpic from '../../assets/images/cat.png'
import dogpic from '../../assets/images/dog.png'

export const PageContent = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
    min-height: calc(100vh - 8.4rem);
    padding: 2rem 5%;
    background: 
        url(${catpic}) no-repeat left bottom/30vw,
        url(${dogpic}) no-repeat right bottom/25vw;
`