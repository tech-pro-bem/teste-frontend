import styled from "styled-components";

export const AppFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem 1.5rem;
    height: 2.5rem;
    background-color: #263238;
`

export const FooterInfo = styled.span`
    font-size: 1rem;
    color: #fff;
    
    & + & {
        padding-left: 1.5rem;
        border-left: 2px solid #676767;
    }
`

export const FooterLink = styled.a`
    color: #0D99FF;

    &:visited {
        color: #FF2FF7;
    }

    &:hover {
        transform: scale(1.1);
    }
`