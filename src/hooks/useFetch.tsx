import React from 'react';

function useFetch() {
  const [error, setError] = React.useState<null | string>(null);

  const request = React.useCallback(async function (url: string) {
    let response;
    let json;
    let urlCreated;
    try {
      setError(null);
      response = await fetch(url);
      json = await response.blob();
      urlCreated = URL.createObjectURL(json);
    } catch (error) {
      urlCreated = null;
      setError('Falha ao buscar os dados');
    } finally {
      return { response, urlCreated };
    }
  }, []);
  return { error, request };
}

export default useFetch;
