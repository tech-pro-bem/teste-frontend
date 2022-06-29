import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
  height: 100%;
  padding: 2rem;

  img {
    border-radius: .4rem;
    margin: 4rem auto;
    width: 20rem;
    height: 30rem;
  }
`

export const Button = styled.button`
  border: none;
  border-radius: .4rem;
  
  padding: 1rem 2rem;
  background-color: #00BFFF;
  color: #ffff;
  font-weight: bold;
  font-size: 1.8rem;
`