import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('changes useState of Submitted to true, and renders user data', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('app-button-submit'));
  expect(getByTestId('app-div-data')).toHaveTextContent('Submitted User Data');
});

describe('The user data that appears on Submit', () => {
  it('always renders at 360px wide', () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId('app-button-submit'));
    expect(getByTestId('app-div-data')).toHaveStyle('width:360px');
  });
});
