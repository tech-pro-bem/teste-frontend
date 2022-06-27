import * as Styles from './app';

export function App() {
  return (
    <Styles.Container>
      <header>
        <h1>Welcome to Fetcher</h1>
      </header>

      <Styles.Main>
        <Styles.Section aria-label="cat-generator">
          <img src="http://placekitten.com/200/300" alt="cat" />
          <Styles.Button type="button">generate cat</Styles.Button>
        </Styles.Section>

        <Styles.Section aria-label="dog-generator">
          <img src="https://place.dog/300/200" alt="dog" />
          <Styles.Button type="button">generate dog</Styles.Button>
        </Styles.Section>
      </Styles.Main>
    </Styles.Container>
  );
}
