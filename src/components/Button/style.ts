import styled from 'styled-components';

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

  &:hover {
    background: #fb8;
    color: white;
  }
`;
