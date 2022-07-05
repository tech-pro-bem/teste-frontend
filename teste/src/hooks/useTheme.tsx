import { useContext } from 'react';
import { Context } from '.';
import { ThemeProps } from '@shared/interfaces';

export function useTheme() {
  const context = useContext(Context);

  const { theme, setTheme } = context as ThemeProps;

  return {
    theme,
    setTheme,
  };
}
