import React from 'react';
import Card from './components/Card/Card';
import useFetch from './hooks/useFetch';
import { Container } from './style';

type URL = {
  cat: string;
  dog: string;
};
// https://placedog.p.rapidapi.com/300/
const ApiUrl: URL = {
  cat: 'http://placekitten.com/200/300',
  dog: 'https://place.dog/400/400',
};

function App() {
  const [url, setUrl] = React.useState<URL>(ApiUrl);
  const { loading, request } = useFetch();

  async function getCatUrl() {
    const Ramndom = () => Math.floor(Math.random() * (400 - 100) + 100);
    const { urlCreated } = await request(
      `https://placekitten.com/${Ramndom()}/${Ramndom()}`
    );
    setUrl({ ...url, cat: `${urlCreated}` });
  }
  async function getDogUrl() {
    const { urlCreated } = await request('https://place.dog/400/400');
    setUrl({ ...url, dog: `${urlCreated}` });
  }
  return (
    <Container>
      <h2>Pet Generator</h2>
      <main>
        <Card
          url={url.cat}
          getFunction={getCatUrl}
          loading={loading}
          title='Gerar Gatinho'
        />
        <Card
          url={url.dog}
          getFunction={getDogUrl}
          loading={loading}
          title='Gerar Cachorinho'
        />
      </main>
    </Container>
  );
}

export default App;
