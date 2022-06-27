import * as React from 'react';
import { featchData } from '../../api';

export function Fetcher({
  render,
  url,
  renderFailure,
  hasHeaders = false,
}: any) {
  const [response, setResponse] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const fetch = React.useCallback(() => {
    setLoading(true);
    featchData({
      url,
      hasHeaders,
    })
      .then(url => {
        setResponse(url);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [url, hasHeaders]);

  React.useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!error && render(response, fetch, loading)}
      {error && renderFailure(error)}
    </>
  );
}
