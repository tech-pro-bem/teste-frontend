import ContextProvider from './hooks';
import { Home } from '@pages/Home';
import GlobalStyle from '@styles/global';

function App() {
  return (
    <ContextProvider>
      <Home />
      <GlobalStyle />
    </ContextProvider>
  );
}

export default App;
