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
});
