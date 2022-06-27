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

const section = () => css`
  label: container-section;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const button = () => css`
  label: container-button;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid rgb(71 85 105);
  background-color: #fff;
  color: rgb(71 85 105);
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  transition: all, 0.3s ease-in-out;

  &:hover {
    background-color: rgb(71 85 105);
    color: #fff;
  }

  &:active {
    background-color: rgb(51 65 85);
    color: #fff;
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  @media (max-width: 768px) {
    & {
      padding: 0.75rem;
    }
  }
`;

export const Container = styled.div(container);
export const Main = styled.main(main);
export const Section = styled.section(section);
export const Button = styled.button(button);
