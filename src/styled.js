import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  .container-logo {
    img {
      max-width: 250px;
    }

    @media (min-width: 768px) {
      img {
        max-width: 400px;
      }
    }
  }

  .container-animals {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
