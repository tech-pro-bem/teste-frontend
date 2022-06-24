import React from 'react';
import { render } from '@testing-library/react';
import Dogs from '../components/Dogs'

describe('Testando componente `Dogs`', () => {
	it('Validando se o componente <Dogs /> existe', () => {
		render(<Dogs />);
	});
});
