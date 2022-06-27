import { ErrorMessage } from '../Error';
import { Fetcher } from '../fetcher';
import { Generator } from '../Generator';

export function Cat() {
  return (
    <Fetcher
      url="https://placedog.p.rapidapi.com/300/200"
      isdefaultHeaders={true}
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
