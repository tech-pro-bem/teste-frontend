import styled from 'styled-components';

export const CardCss = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  div.loading {
    width: 100%;
    border-radius: 0.6rem;
    height: 300px;
    background: red;
  }
  img {
    display: block;
    width: 100%;
    border-radius: 0.6rem;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    height: 20rem;
  }
`;
