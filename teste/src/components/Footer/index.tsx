import { useTheme } from '@hooks/useTheme';
import { Waves } from '@components/Waves';
import {
  Background,
  ContainerText,
  Content,
  Title,
  Description,
} from './style';

export function Footer() {
  const { theme } = useTheme();

  console.log(window.innerWidth);

  return (
    <Background isDark={theme}>
      <Waves />
      <Content>
        <ContainerText>
          <Title>Vinicius Perrone</Title>
          <Description>
            © Todos os direitos reservados | 2022 | Feito com muito 💖 por
            Vinicius
          </Description>
        </ContainerText>
      </Content>
    </Background>
  );
}
