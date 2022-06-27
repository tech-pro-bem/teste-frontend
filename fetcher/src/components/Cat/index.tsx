import { ErrorMessage } from '../Error';
import { Fetcher } from '../Fetcher';
import { Generator } from '../Generator';

export function Cat() {
  return (
    <Fetcher
      url="https://placedog.p.rapidapi.com/300/200"
      hasHeaders={true}
      render={(url: string, fetch: Function, loading: boolean) => (
        <Generator
          src={url}
          onClick={() => fetch()}
          loading={loading}
          label="generate dog"
        />
      )}
      renderFailure={(error: string) => <ErrorMessage message={error} />}
    />
  );
}
