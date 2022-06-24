import React from 'react';
import { render } from '@testing-library/react';
import Cats from '../components/Cats';

describe('Testando componente `Cats`', () => {
	it('Validando se o componente <Cats /> existe', () => {
		render(<Cats />);
	});
});
