import styled from 'styled-components';

type ThemeProps = {
  isDark: boolean;
}

export const Background = styled.footer<ThemeProps>`
  width: 100%;
  height: 100px;
  background-color: ${props => props.isDark ? '#3A3A41': '#F5F5F5'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  padding-top: 20vh;
  padding-left: 5vh;

  @media only screen and (max-width: 890px) {
    padding-top: 8%;
  }

  @media only screen and (max-width: 680px) {
    padding-top: 5%;
  }
`;

export const ContainerText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-family: "Fredoka";
  color: #fff;

  @media only screen and (max-width: 840px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 650px) {
    display: none;
  }

  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-family: "Smooch Sans";
  color: #f5f5f5;

  @media only screen and (max-width: 840px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 650px) {
    margin-top: 5%;
    font-size: 16px;
  }

  @media only screen and (max-width: 550px) {
    font-size: 14px;
  }
`;
