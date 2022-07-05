import styled from 'styled-components';
import { PetProps } from '@shared/interfaces';

export const Container = styled.div<PetProps>`
  position: absolute;
  z-index: 10;
  top: ${props => props.top};
  left: ${props => props.left};
  right:${props => props.right};
  bottom: ${props => props.bottom};
  width: 200px;
  height: 200px;
  transform: rotate(${props => props.rotate});

  @media only screen and (max-width: 1000px){
    width: 150px;
    height: 150px;
  }

  @media only screen and (max-width: 930px){
    width: 100px;
    height: 100px;
  }

  @media only screen and (max-width: 730px){
    right: ${props => `calc(${props.right} - 6%)`};
    left: ${props => `calc(${props.left} - 6%)`};
  }

  @media only screen and (max-width: 600px){
    right: ${props => `calc(${props.right} + 1%)`};
    left: ${props => `calc(${props.left} + 1%)`};
    bottom: ${props => `calc(${props.bottom} - 400px)`};
  }
`;