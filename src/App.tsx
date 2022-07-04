import React from 'react';
import Card from './components/Card/Card';
import useFetch from './hooks/useFetch';
import { Container } from './style';

type URL = {
  cat: string;
  dog: string;
};
const ApiUrl: URL = {
  cat: 'http://placekitten.com/200/300',
  dog: 'https://place.dog/400/400',
};

function App() {
  const [url, setUrl] = React.useState<URL>(ApiUrl);
  const { request } = useFetch();
  const [loading, setLoading] = React.useState({
    loadingCat: false,
    loadingDog: false,
  });

  async function getCatUrl() {
    setLoading({ ...loading, loadingCat: true });
    const Ramndom = () => Math.floor(Math.random() * (400 - 100) + 100);
    const { urlCreated } = await request(
      `https://placekitten.com/${Ramndom()}/${Ramndom()}`
    );
    setUrl({ ...url, cat: `${urlCreated}` });
    setLoading({ ...loading, loadingCat: false });
  }
  async function getDogUrl() {
    setLoading({ ...loading, loadingDog: true });
    const { urlCreated } = await request('https://place.dog/400/400');
    setUrl({ ...url, dog: `${urlCreated}` });
    setLoading({ ...loading, loadingDog: false });
  }
  return (
    <Container>
      <h2>Pet Generator</h2>
      <main>
        <Card
          url={url.cat}
          getFunction={getCatUrl}
          loading={loading.loadingCat}
          title='Gerar Gatinho'
        />
        <Card
          url={url.dog}
          getFunction={getDogUrl}
          loading={loading.loadingDog}
          title='Gerar Cachorinho'
        />
      </main>
      <p>
        Certifique-se de ter a{' '}
        <a
          target='_blanc'
          href='https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc'
        >
          extensão do chrome
        </a>{' '}
        instalada, para ver as fotos dos cachoros.
      </p>
    </Container>
  );
}

export default App;
