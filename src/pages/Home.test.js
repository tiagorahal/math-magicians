import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from './home';

it('matches the snapshot', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders two paragraphs', () => {
  render(<Home />);
  const paragraphElements = screen.getAllByText(/Lorem ipsum/i);

  expect(paragraphElements.length).toBe(2);
});
