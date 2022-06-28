import styled from 'styled-components';

export const Wrapper = styled.main`
  background: beige;
  min-height: 100vh;
`

export const Container = styled.section`
  margin: 0 auto;
  padding: 2rem 1.5rem;
  height: 100%;
  max-width: 1100px;
`

export const Title = styled.h1`
  color: #D35820;
  font-size: 2.75rem;
  text-align: center;

  @media(min-width: 768px){
    font-size: 3.5rem;
  }
`

export const PetSectionWrapper = styled.div`
  margin-top: 3rem;

  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 768px) {
    margin-top: 4rem;
    flex-direction: row;
    justify-content: space-evenly;
  }
`