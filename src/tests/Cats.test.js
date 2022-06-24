import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cats from '../components/Cats';

describe('Testando componente `Cats`', () => {
	it('Validando se o componente <Cats /> existe', () => {
		render(<Cats />);
	});

	it('Validando se a página <Cats /> contém uma tag `button`', () => {
		render(<Cats />);
		const header = screen.getByRole('button');
		expect(header).toBeInTheDocument();
	});

});
