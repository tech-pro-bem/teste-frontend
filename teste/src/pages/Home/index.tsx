import { useTheme } from '@hooks/useTheme';
import { Card } from '@components/Card';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Pet } from '@components/Pet';
import { Background, Section } from './styles';

export function Home() {
  const { theme } = useTheme();
  return (
    <Background isDark={theme}>
      <Header />
      <Section isDark={theme}>
        <Card type="dog" url="https://placedog.p.rapidapi.com/300/200" />
        <Card type="cat" url="https://placekitten.com/g" />
        <Pet left={'-6%'} top={'20%'} rotate={'45deg'} />
        <Pet right={'-5%'} bottom={'20%'} rotate={'230deg'} />
      </Section>
      <Footer />
    </Background>
  );
}
