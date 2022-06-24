import React from 'react';
import { render } from '@testing-library/react';
import App from '../pages/App'

describe('Testando componente `App`', () => {
	it('Validando se a página <App /> é renderizada', () => {
		render(<App />);
	});
});
