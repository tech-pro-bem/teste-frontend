import { useTheme } from '@hooks/useTheme';
import { BsFillCloudMoonFill, BsFillCloudSunFill } from 'react-icons/bs';
import { Background } from './style';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <Background isDark={theme}>
      <h1>Pet Generate</h1>
      <span onClick={() => setTheme(!theme)}>
        {theme ? (
          <BsFillCloudMoonFill size={28} color={'#f6f1f1'} />
        ) : (
          <BsFillCloudSunFill size={28} color={'#4B4E6D'} />
        )}
      </span>
    </Background>
  );
}
