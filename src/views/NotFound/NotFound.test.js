import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

it('should render a not found page', () => {
  render(<NotFound />);

  expect(screen.getByText('Page not found')).not.toBeEmptyDOMElement();
});
