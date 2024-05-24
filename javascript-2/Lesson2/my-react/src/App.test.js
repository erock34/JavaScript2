import { render, screen } from '@testing-library/react';
import { Welcome } from './components/Welcome';

test('renders learn react link', () => {
  render(<Welcome />);
  const linkElement = screen.getByText(/paragraph/i);
  expect(linkElement).toBeInTheDocument();
});
