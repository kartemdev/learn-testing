import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { renderTestApp } from './tests/helpers/render-test-app';
import { renderWithRedux } from './tests/helpers/render-with-redux';
import Navbar from './components/navbar';

describe('TEST APP', () => {
  test('Router test', async () => {
    renderTestApp(<Navbar />, {});

    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    await userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('Error page test', async () => {
    renderTestApp(null, { route: '/non-existing-path' });

    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
})
