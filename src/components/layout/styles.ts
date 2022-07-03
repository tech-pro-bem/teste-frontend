import styled from "styled-components";

export const Container = styled.div`
  padding-top: 3rem;
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @media screen and (min-width: 768px) {
    margin: auto;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;