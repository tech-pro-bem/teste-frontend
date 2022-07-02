import styled from "styled-components";
import { mainColor, mainColorLighter } from "../../styles/Variables";

export const Generator = styled.div`
  padding: 2rem 2rem 0 2rem;
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 2rem;

  button {
    background-color: ${mainColor};
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    width: 100%;
    padding: .75rem 0 .75rem 0;
    border-radius: .5rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${mainColorLighter};
    }
  }

  img {
    width: 100%;
    background-size: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
`;