import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Team from './Team';

it('should render a team’s detail page', async () => {
  // MemoryRouter is needed because <Team> uses the <Link> component
  const { container } = render(
    <MemoryRouter>
      <Team match={{ params: { id: 1 } }} />
    </MemoryRouter>
  );
  screen.getByLabelText(/loading/);
  await screen.findAllByText(/Rip City Kickers/);

  expect(container).toMatchSnapshot();
});
