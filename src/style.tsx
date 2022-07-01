import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  h2 {
    text-align: center;
    font-family: 'IBM Plex Mono', monospace;
    margin: 2rem 0;
    text-transform: uppercase;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 40rem) {
      grid-template-columns: 1fr;
    }
  }
`;