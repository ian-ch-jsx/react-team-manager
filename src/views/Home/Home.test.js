import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

it('should render a welcome message if not logged in', () => {
  const { container } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText('Welcome to the Kickball League Directory!')).not.toBeEmptyDOMElement();
  expect(container).toMatchSnapshot();
});

it('should render a message with the user’s email if logged in', () => {
  const { container } = render(
    <MemoryRouter>
      <Home user={{ email: 'test@example.com' }} />
    </MemoryRouter>
  );

  expect(screen.getByText('Hello, test@example.com!')).not.toBeEmptyDOMElement();
  expect(container).toMatchSnapshot();
});
