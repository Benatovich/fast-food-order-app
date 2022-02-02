import { render, screen } from '@testing-library/react';
import App from './App';

test('coffee', () => {
  render(<App />);
  const linkElement = screen.getByText(/coffee/i);
  expect(linkElement).toBeInTheDocument();
});
