import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Cat } from '.';

describe('Cat', () => {
  it('Should render corretly', () => {
    render(<Cat />);

    const catGenerator = screen.getByLabelText('generate-cat');
    expect(catGenerator).toBeInTheDocument();
    expect(
      within(catGenerator).getByRole('img', { name: /cat/i })
    ).toBeInTheDocument();
    expect(
      within(catGenerator).getByRole('button', { name: /generate cat/i })
    ).toBeInTheDocument();
  });

  it('should fetch a cat when the button is clicked', () => {
    render(<Cat />);

    const catButton = screen.getByRole('button', { name: /generate cat/i });

    userEvent.click(catButton);

    expect(catButton).toBeDisabled();
    expect(screen.getByRole('img', { name: /cat/i })).toHaveAttribute('src');
  });
});
