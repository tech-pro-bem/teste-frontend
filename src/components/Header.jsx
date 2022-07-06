import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: rgb(49, 102, 148);
  font-size: 2em;
  text-align: center;
  margin-top: 2em;
`;

function Header() {
  return (
    <StyledHeader>
      Gerador de animais
    </StyledHeader>
  );
}

export default Header;
