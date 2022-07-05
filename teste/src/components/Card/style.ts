import styled from 'styled-components';

export const Background = styled.div`
  width: 270px;
  height: 400px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

export const Image = styled.img`
  width: 200px;
  height: 180px;
`;

export const Default = styled.img`
  width: 200px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: #11D08A;
  color: white;
  font-size: 14px;
  font-family: 'Titan One', cursive;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 10px;

  &:hover {
    opacity: 0.5;
  }
`;