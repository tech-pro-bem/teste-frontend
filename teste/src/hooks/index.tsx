import { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Context = createContext({});

export default function ContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<boolean>();

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
}
