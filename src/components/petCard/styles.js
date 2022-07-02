import styled from "styled-components";

export const CardStructure = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: min(90%, 25rem);
    min-height: 30rem;
    border: 1px solid #eee;
    border-radius: 0.5rem;
    background-color: #fff;
    overflow: hidden;
`

export const CardImageContainer = styled.div`
    width: 100%;
    height: 20rem;
    background-color: #d2d4d5;
    overflow: hidden;

    .card-pic {
        width: 100%;
        min-height: 100%;
    }
`

export const CardInfo = styled.header`
    width: 100%;
    min-height: 6rem;
    padding: 1rem;

    .card-title {
        font-size: clamp(1.2rem, 3vw + 0.2rem, 1.4rem);
        font-weight: 700;
    }

    .card-link {
        color: #888;
    }
`

export const CardFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: calc(100% - 2rem);
    min-height: 4.5rem;
    padding: 1rem 0;
    border-top: 1px solid #eee;
`