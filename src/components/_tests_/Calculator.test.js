import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Calculator from '../calculator';

it('matches the snapshot', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders AC key element', () => {
  render(<Calculator />);
  const acKeyElement = screen.getByText(/AC/i);

  expect(acKeyElement).toBeInTheDocument();
});

it('recognizes clicks on numeric buttons', () => {
  render(<Calculator />);
  const Key2Element = screen.getByText(/2/i);
  const Key4Element = screen.getByText(/4/i);

  fireEvent.click(Key4Element);
  fireEvent.click(Key2Element);

  const displayElement = screen.getByText(/42/i);

  expect(displayElement.textContent).toMatch(/42/i);
});

it('multiplies two numbers', () => {
  render(<Calculator />);
  const Key4Element = screen.getByText(/4/i);
  const KeyTimesElement = screen.getByText(/x/i);
  const KeyEqualsElement = screen.getByText(/=/i);

  fireEvent.click(Key4Element);
  fireEvent.click(KeyTimesElement);
  fireEvent.click(Key4Element);
  fireEvent.click(KeyEqualsElement);

  const displayElement = screen.getByText(/16/i);

  expect(displayElement.textContent).toMatch(/16/i);
});
