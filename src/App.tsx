import React from 'react';
import styled from 'styled-components';
import Card from './components/Card/Card';
import useFetch from './hooks/useFecth';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  h2 {
    text-align: center;
    font-family: 'IBM Plex Mono', monospace;
    margin: 2rem 0;
    text-transform: uppercase;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 40rem) {
      grid-template-columns: 1fr;
    }

    img {
      display: block;
      width: 100%;
      border-radius: 0.6rem;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    }
  }
`;

function App() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    (async () => {
      const url = 'https://place.dog/300/200';
      const r = await fetch(url);
      const j = await r.json();
      console.log(j);
    })();
  }, []);

  // console.log(data);

  if (loading) return <p>Caregando...</p>;
  return (
    <Container>
      <h2>Pet Generator</h2>
      {}
      <main>
        <Card />
        <Card />
      </main>
    </Container>
  );
}

export default App;
