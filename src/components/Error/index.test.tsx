import { render, screen, within } from '@testing-library/react';

import { ErrorMessage } from '.';

describe('Error', () => {
  it('Should render corretly', () => {
    render(<ErrorMessage />);

    const error = screen.getByRole('alert');
    const errorMessage = within(error).getByText('Ops! Somthing went warnig.');

    expect(error).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  it('Should render with custom message', () => {
    render(<ErrorMessage message="Error message" />);

    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });
});
