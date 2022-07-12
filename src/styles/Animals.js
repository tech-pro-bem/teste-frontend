import styled from 'styled-components';

export const DivAnimal = styled.div`
  border-radius: 5px;
  background-color: #F2D7D9;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;

export const DivImage = styled.div`
  width: 200px;
  height: 200px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.src === '') && 'none'}
  `;

export const ButtonAnimal = styled.button`
  cursor: pointer;
`;
