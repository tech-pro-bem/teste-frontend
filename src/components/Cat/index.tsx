/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const [sizes, setSizes] = React.useState(randomSize());

  return (
    <Fetcher
      url={`http://placekitten.com/${sizes[0]}/${sizes[1]}`}
      render={(url: string, fetch: Function, loading: boolean) => (
        <Generator
          src={url}
          onClick={() => {
            setSizes(randomSize());
            fetch();
          }}
          loading={loading}
          label="generate cat"
        />
      )}
      renderFailure={(error: string) => <ErrorMessage message={error} />}
    />
  );
}
