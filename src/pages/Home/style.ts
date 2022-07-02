import styled from "styled-components";

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 60px;

  @media screen and (max-width: 768px) {
    padding: 20px;
    grid-template-columns: 1fr;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  h1 {
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
      margin-bottom: 0;
    }
  }

  h1 > svg {
    transform: rotate(330deg);
    margin-right: 10px;
  }
`