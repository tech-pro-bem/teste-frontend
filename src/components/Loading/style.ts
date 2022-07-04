import styled, { keyframes }  from 'styled-components';

const slide = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Span = styled.span`
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
`;
