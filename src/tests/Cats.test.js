import React from "react";
import { render, screen } from '@testing-library/react'
import App from "../App";
import Cats from '../components/Cats'

describe('Testando componente `Cats`', () => {
  it('Validando se o componente <Cats /> é renderizado', () => {
    render(<Cats />);
  })
})