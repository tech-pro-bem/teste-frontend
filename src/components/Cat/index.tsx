import * as React from 'react';

import { ErrorMessage } from '../Error';
import { Fetcher } from '../Fetcher';
import { Generator } from '../Generator';

function randomSize() {
  return [
    Math.floor(Math.random() * 150) + 150,
    Math.floor(Math.random() * 150) + 100,
  ];
}

export function Cat() {
  const [_, setFetching] = React.useState(false);
  const sizes = randomSize();

  return (
    <Fetcher
      url={`http://placekitten.com/${sizes[0]}/${sizes[1]}`}
      render={(url: string, fetch: Function, loading: boolean) => {
        setFetching(loading);
        return (
          <Generator
            src={url}
            onClick={() => fetch()}
            loading={loading}
            label="generate cat"
          />
        );
      }}
      renderFailure={(error: string) => <ErrorMessage message={error} />}
    />
  );
}
