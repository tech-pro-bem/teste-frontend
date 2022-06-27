import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dog } from '.';

describe('dog', () => {
  it('Should render corretly', () => {
    render(<Dog />);

    const dogGenerator = screen.getByLabelText('generate-dog');
    expect(dogGenerator).toBeInTheDocument();
    expect(
      within(dogGenerator).getByRole('img', { name: /dog/i })
    ).toBeInTheDocument();
    expect(
      within(dogGenerator).getByRole('button', { name: /generate dog/i })
    ).toBeInTheDocument();
  });

  it('should fetch a dog when the button is clicked', () => {
    render(<Dog />);

    const dogButton = screen.getByRole('button', { name: /generate dog/i });

    userEvent.click(dogButton);

    expect(dogButton).toBeDisabled();
    expect(screen.getByRole('img', { name: /dog/i })).toHaveAttribute('src');
  });
});
