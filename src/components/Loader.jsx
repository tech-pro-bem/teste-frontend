import React from 'react';
import styled, { keyframes } from 'styled-components';

// Ref.: https://loading.io/css/
const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
const StyledLoader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
&:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #cef;
  border-color: #cef transparent #cef transparent;
  animation: ${rotate} 1.2s linear infinite;
}
`;

function Loader() {
  return (
    <StyledLoader />
  );
}
export default Loader;
