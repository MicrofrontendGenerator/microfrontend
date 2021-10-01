import React from 'react';
import MicrofrontendAsComponent from '../';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// to make sure everything is clean after each test
afterAll(cleanup);

it('it checks if the content matches', () => {
  render(<MicrofrontendAsComponent />);
  const element = screen.getByTestId('microfrontend-as-component');
  expect(element).toHaveTextContent('Microfrontend as a Component');
});
