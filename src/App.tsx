import * as Styles from './app';
import { Dog } from './components/Dog';
import { Cat } from './/components/Cat';

export function App() {
  return (
    <Styles.Container>
      <header>
        <h1>Welcome to Fetcher</h1>
      </header>
      <Styles.Main>
        <Cat />
        <Dog />
      </Styles.Main>
    </Styles.Container>
  );
}
