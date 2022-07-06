import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  background-size: cover;

  & > img {
    border-radius: 8px;
    width: 200px;
    height: 200px;
  }
`
