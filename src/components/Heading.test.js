import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Heading from './Heading.js';

afterEach(cleanup);

it('renders correctly', () => {
  const { asFragment } = render(
    <Heading roomNum={1} hasCheck={false} isChecked={false} />
  );
  expect(asFragment()).toMatchSnapshot();
});
