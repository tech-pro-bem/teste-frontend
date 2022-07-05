import styled from "styled-components";
import { mainColor, mainColorLighter } from "../../styles/Variables";

export const Generator = styled.div`
  padding: 2rem 2rem 0 2rem;
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.19);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  transition: .3s;
  
  &:hover {
    transform: translateY(-.5rem);
  }

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
    transition: .3s;

    &:hover {
      background-color: ${mainColorLighter};
    }
  }

  img {
    max-width: 100%;
    max-height: 300px;
    width: auto;
    height: auto;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
`;