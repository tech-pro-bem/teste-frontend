import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-smooth: antialiased;
        -webkit-font-smoothing: antialiased;
        text-rendering: geometricPrecision;

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
