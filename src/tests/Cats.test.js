import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cats from '../components/Cats';

describe('Testando componente `Cats`', () => {
	it('Validando se o componente <Cats /> existe', () => {
		render(<Cats />);
	});

	it('Validando se o componente <Cats /> contém uma tag `button`', () => {
		render(<Cats />);
		const header = screen.getByRole('button');
		expect(header).toBeInTheDocument();
	});

	it('Validando se o componente <Cats /> renderiza o botão com o texto `Gerar Gatinhos`', () => {
		render(<Cats />);
		const button = screen.getByRole('button');
		expect(button).toHaveTextContent(/Gerar Gatinhos/i);
	});

	it('Validando se o componente <Cats /> contém uma tag `img`', () => {
		render(<Cats />);
		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
	});

});
