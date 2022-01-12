import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Teams';

it('should render a list of teams', async () => {
  // MemoryRouter is needed because <Teams> uses the <Link> component
  const { container } = render(
    <MemoryRouter>
      <Teams />
    </MemoryRouter>
  );
  screen.getByLabelText(/loading/);
  await screen.findByText(/Bridge City Sneakers/);

  expect(container).toMatchSnapshot();
});
