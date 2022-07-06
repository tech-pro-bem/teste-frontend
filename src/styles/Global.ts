import { createGlobalStyle, css } from "styled-components";
import { mixinsStyled } from "./mixins";

export default createGlobalStyle`
    body{
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        font-smooth: antialiased;
        -webkit-font-smoothing: antialiased;
        text-rendering: geometricPrecision;
        ${mixinsStyled.sm`
            ${css`
                font-size: 14px;
            `}
        `}

        ${mixinsStyled.lg`
            ${css`
                font-size: 16px;
            `}
        `}

    }
    *{
        font-family: inherit;
        text-rendering: inherit;
        font-smooth: inherit;
        -webkit-font-smoothing: inherit;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;
