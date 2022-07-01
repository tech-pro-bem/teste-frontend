import React from 'react';

function useFetch() {
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async function (url: string) {
    let response;
    let json;
    let urlCreated;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      json = await response.blob();
      urlCreated = URL.createObjectURL(json);
    } catch (error) {
      urlCreated = null;
      setError('Falha ao buscar os dados');
    } finally {
      setLoading(false);
      return { response, urlCreated };
    }
  }, []);
  return { loading, error, request };
}

export default useFetch;
