import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Navbar from './navbar';

it('matches the snapshot', () => {
  const tree = renderer
    .create(<Navbar />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders the main heading', () => {
  render(<Navbar />);
  const headingElement = screen.getByText(/^Math Magicians$/i);

  expect(headingElement).toBeInTheDocument();
});

it('renders the navigation links', () => {
  render(<Navbar />);
  const homeLinkElement = screen.getByText(/Home/i);
  const calculatorLinkElement = screen.getByText(/Calculator/i);
  const quoteLinkElement = screen.getByText(/Quote/i);

  expect(homeLinkElement).toBeInTheDocument();
  expect(calculatorLinkElement).toBeInTheDocument();
  expect(quoteLinkElement).toBeInTheDocument();
});
