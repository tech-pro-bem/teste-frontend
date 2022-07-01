import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonCss = styled.button`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: bold;
  display: block;
  border: none;
  padding: 1rem;
  cursor: pointer;
  background: #fb5;
  border-radius: 0.6rem;
  max-width: 20rem;
  width: 100%;
  margin: 0 auto;
  transition: 0.3s;
  position: relative;
  span {
    top: -0.6rem;
    right: -0.5rem;
    position: absolute;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border: 6px solid #462d0b;
    border-left-color: transparent;
    transition: 0.3s;
    animation: ${slide} 1s infinite;
  }

  &:hover {
    background: #fb8;
    color: white;
  }
`;
