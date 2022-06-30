import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Button = styled.button`
  color: #fff;
  background: #f97316;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 11rem;
  height: 4rem;
  border-radius: 1rem;
  text-transform: uppercase;
  margin-top: 1rem;
  &:hover {
    background: #ea580c;
  }
  transition: all 300ms ease;
  cursor: pointer;
`

export const Image = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 2rem;
  margin: 40px 0 60px;
  object-fit: cover;
`
