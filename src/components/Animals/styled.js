import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 250px;
    height: 250px;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  }

  button {
    margin-right: 10px;
    border-radius: 50px;
    padding: 3px 20px;
    font-size: 1rem;
    color: #d5d5d5;
    background-color: #2f2f2f;
    border: none;
    cursor: pointer;
    border: 2px solid #007ced;

    display: flex;
    align-items: center;
    gap: 0.5rem;


    &[disabled] {
        cursor: not-allowed;
        svg{
            animation: animate 2s infinite;
        }


    &:hover {
      background-color: #007ced;
      color: #2f2f2f;
    }
  }

  @keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
