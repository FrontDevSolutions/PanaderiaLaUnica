import { render, screen } from '@testing-library/react';
//import App from './App';
import Domicilios from './Domicilios';

test('renders learn react link', () => {
  //render(<App />);
  render(<Domicilios />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
