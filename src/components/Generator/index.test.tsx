import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Generator } from '.';

describe('Generator', () => {
  it('should render correctly', () => {
    render(
      <Generator
        src="http://placekitten.com/200/300"
        onClick={() => {}}
        loading={false}
        label="generate cat"
      />
    );

    expect(screen.getByText('generate cat')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should call onClick function', async () => {
    const onClick = jest.fn();

    render(
      <Generator
        src="http://placekitten.com/200/300"
        onClick={onClick}
        loading={false}
        label="generate cat"
      />
    );

    const button = screen.getByRole('button', { name: 'generate cat' });

    userEvent.click(button);
    await waitFor(async () => expect(onClick).toHaveBeenCalled());
  });

  it('should render with the loading state', () => {
    render(
      <Generator
        src="http://placekitten.com/200/300"
        onClick={() => {}}
        loading={true}
        label="generate cat"
      />
    );

    expect(screen.getByRole('button', { name: 'generate cat' })).toBeDisabled();
  });
});
