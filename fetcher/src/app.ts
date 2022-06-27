import styled from '@emotion/styled';
import { css } from '@emotion/react';

const container = () => css`
  label: container;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  h1 {
    color: rgb(71 85 105);
  }
`;

const main = () => css`
  label: container-main;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const Container = styled.div(container);
export const Main = styled.main(main);
