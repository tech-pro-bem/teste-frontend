import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
  from {
    transform: translateY(15px);
  }
  to {
    transform: translateY(0px);
  }
`;

export const Path = styled.path`
  animation: ${appearFromBottom} 3s 1.2s ease-in-out infinite alternate;
`;