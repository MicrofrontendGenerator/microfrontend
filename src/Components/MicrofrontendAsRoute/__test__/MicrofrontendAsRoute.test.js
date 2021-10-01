import React from 'react';
import MicrofrontendAsRoute from '../';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// to make sure everything is clean after each test
afterAll(cleanup);

it('it checks if the content matches', () => {
  render(<MicrofrontendAsRoute />);
  const element = screen.getByTestId('microfrontend-as-route');
  expect(element).toHaveTextContent('Microfrontend as a Route');
});
