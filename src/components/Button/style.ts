import styled from "styled-components";

export const ButtonStyle = styled.button`
  height: 50px;
  width: 250px;
  border-radius: 12px;
  border: 0;
  cursor: pointer;
  background: #dc712d;
  font-weight: bold;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`