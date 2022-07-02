import styled from "styled-components"

export const Container = styled.div`
  width: 300px;
  margin: 2rem auto 2rem;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  & img {
    width: 200px;
    height: 300px;
    border-radius: 20px;
  }
`

export const Button = styled.button`

  background-color: #E88b10;
  color: #FFF;
  border: none;
  border-radius: 20px;
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`