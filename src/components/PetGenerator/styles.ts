import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  gap: 1rem;
  flex-direction: column;

  border-radius: 10px;
`

export const Button = styled.button`
  padding: 1rem 0.5rem;

  background-color: orange;
  color: #fff;

  border: none;
  border-radius: 10px;

  font-size: 1.125rem;
  font-weight: 600;

  cursor: pointer;

  transition: all 150ms linear;

  &:hover{
    opacity: 0.8;
  }
`

export const ImageWrapper = styled.div`
  & img {
    width: 100%;
    height: 300px;
    
    border-radius: 10px;
    
    object-fit: cover;
    object-position:center;
  }
`