import { render, screen } from '@testing-library/react';

import { Fetcher } from '.';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  //@ts-ignore
  console.error.mockRestore();
});

describe('Fetcher', () => {
  it('should render', () => {
    render(
      <Fetcher
        url="http://placekitten.com/200/300"
        render={() => <div>Hello</div>}
        renderFailure={() => <div>Error</div>}
      />
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should render error', async () => {
    render(
      <Fetcher
        url="https://placedog.p.rapidap.com/300/200"
        hasHeaders={true}
        render={() => <div>Hello</div>}
        renderFailure={() => <div>Error</div>}
      />
    );

    expect(await screen.findByText('Error')).toBeInTheDocument();
  });
});
