import styled from 'styled-components';

type ThemeProps = {
  isDark: boolean;
}

export const Background = styled.header<ThemeProps>`
  width: 100vw;
  height: 100px;
  background-color: ${props => props.isDark ? '#3A3A41': '#F5F5F5'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;

  h1 {
    color: ${props => props.isDark ? '#F5F5F5' :'#80DBC4'};
  }
`;