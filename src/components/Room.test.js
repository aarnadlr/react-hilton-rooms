import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Room from './Room.js';

afterEach(cleanup);

it('renders correctly', () => {
  const { asFragment } = render(<Room />);
  expect(asFragment()).toMatchSnapshot();
});
