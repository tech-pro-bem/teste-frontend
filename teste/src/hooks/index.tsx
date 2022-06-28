import { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Context = createContext({});

export default function ContextProvider({ children }: Props) {
  const [theme, setTheme] = useState(false);
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
