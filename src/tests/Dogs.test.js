import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dogs from '../components/Dogs'

describe('Testando componente `Dogs`', () => {
	it('Validando se o componente <Dogs /> existe', () => {
		render(<Dogs />);
	});

  it('Validando se a página <Dogs /> contém uma tag `button`', () => {
		render(<Dogs />);
		const header = screen.getByRole('button');
		expect(header).toBeInTheDocument();
	});

});
