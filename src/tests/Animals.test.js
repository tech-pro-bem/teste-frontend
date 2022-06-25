import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Animals from '../components/Animals';

describe('Testando componente `Animals`', () => {
	it('Validando se o componente <Animals /> existe', () => {
		render(<Animals />);
	});

	it('Validando se o componente <Animals /> contém uma tag `button`', () => {
		render(<Animals />);
		const header = screen.getByRole('button');
		expect(header).toBeInTheDocument();
	});

	it('Validando se o componente <Animals /> contém uma tag `img`', () => {
		render(<Animals />);
		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
	});

});
