import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #202020;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;
