import { css } from '@emotion/react';
import styled from '@emotion/styled';

const button = () => css`
  label: container-button;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid rgb(71 85 105);
  background: #fff;
  color: rgb(71 85 105);
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  transition: color background, 0.3s ease-in-out;

  &:hover {
    background: rgb(71 85 105);
    color: #fff;
  }

  &:active {
    background: rgb(51 65 85);
    color: #fff;
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    & {
      padding: 0.75rem;
    }
  }
`;

export const Button = styled.button(button);
