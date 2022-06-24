import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../pages/App'

describe('Testando componente `App`', () => {
	it('Validando se a página <App /> é renderizada', () => {
		render(<App />);
	});

	it('Validando se a página <App /> contém uma tag `header`', () => {
		render(<App />);
		const header = screen.getByRole('banner');
		expect(header).toBeInTheDocument();
	});

	it('Validando se a página <App /> contém uma tag `h1`', () => {
		render(<App />);
		const headerTitle = screen.getByRole('heading', { level: 1 });
		expect(headerTitle).toBeInTheDocument();
	});

	it('Validando se a página <App /> contém o texto `Doguinhos e Gatinhos`', () => {
		render(<App />);
		const headerTitle = screen.getByRole('heading', { level: 1 });
		expect(headerTitle).toHaveTextContent(/Doguinhos e Gatinhos/i);
	});

	it('Validando se a página <App /> contém uma tag `main`', () => {
		render(<App />);
		const headerTitle = screen.getByRole('main');
		expect(headerTitle).toBeInTheDocument();
	});

	it('Validando se a página <App /> renderiza o componente <Cats />', () => {
		render(<App />);
		const button = screen.getAllByRole('button');
		expect(button[0]).toHaveTextContent(/Gerar Gatinhos/i);
	});

	it('Validando se a página <App /> renderiza o componente <Dogs />', () => {
		render(<App />);
		const button = screen.getAllByRole('button');
		expect(button[1]).toHaveTextContent(/Gerar Doguinhos/i);
	});
});
