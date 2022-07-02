import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    background: linear-gradient(to right top, #2b223a, #1a1321);
    -webkit-font-smoothing: antialiased;
  }
`