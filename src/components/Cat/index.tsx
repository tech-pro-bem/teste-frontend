import { ErrorMessage } from '../Error';
import { Fetcher } from '../Fetcher';
import { Generator } from '../Generator';

export function Cat() {
  return (
    <Fetcher
      url="http://placekitten.com/300/200"
      render={(url: string, fetch: Function, loading: boolean) => (
        <Generator
          src={url}
          onClick={() => fetch()}
          loading={loading}
          label="generate cat"
        />
      )}
      renderFailure={(error: string) => <ErrorMessage message={error} />}
    />
  );
}
