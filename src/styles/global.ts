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
    padding: 60px;
    font-family: 'Courier New', Courier, monospace;
    background: linear-gradient(to right top, #2b223a, #1a1321);
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 20px;
    margin: 0 auto;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }

  h1 {
    margin-bottom: 20px;
  }

  h1 > svg {
    transform: rotate(330deg);
    margin-right: 10px;
  }
`