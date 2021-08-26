import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Quote from './quote';

it('matches the snapshot', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders the quote and the author\'s name', () => {
  render(<Quote />);
  const quoteElement = screen.getByText(/William Paul Thurston/i);

  expect(quoteElement).toBeInTheDocument();
});
