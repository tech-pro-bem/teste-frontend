import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: #fafafa;
    }

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }
`;

export default GlobalStyle;
