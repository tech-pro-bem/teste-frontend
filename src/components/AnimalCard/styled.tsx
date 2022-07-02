import styled from 'styled-components'

import { Variant } from '../../types'

type ImageContainerProps = {
  variant: `${Variant}`
}

const variants = {
  [Variant.PRIMARY]: {
    bgColor: '#ffe483',
    transform: 'rotate(2deg)'
  },
  [Variant.SECONDARY]: {
    bgColor: '#fec6c6',
    transform: 'rotate(-1.5deg)'
  }
}

export const LoaderFallback = styled.div`
  width: 320px;
  height: 444px;
  background-color: #eee;
  margin-bottom: 32px;
`

export const ImageContainer = styled.div<ImageContainerProps>`
  background-color: ${props => variants[props.variant].bgColor};
  border: 2px solid #000;
  padding: 8px;
  border-radius: 30px;
  width: 300px;
  height: 424px;
  transform: ${props => variants[props.variant].transform};
  margin-bottom: 32px;
`

export const Image = styled.img`
  border: 4px solid #000;
  border-radius: 30px;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  object-fit: cover;
`

export const Button = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #22c993;
  border: 2px solid #000;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`
