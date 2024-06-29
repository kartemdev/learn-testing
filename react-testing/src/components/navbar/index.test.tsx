import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderWithRouter from "../../tests/helpers/render-with-router"
import Navbar from "./index"
import { renderTestApp } from "../../tests/helpers/render-test-app";

describe('NAVBAR TEST', () => {
  test('main link navbar', async () => {
    renderTestApp(<Navbar />, {});

    const mainLink = screen.getByTestId('main-link');
    await userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();

  });

  test('about link navbar', async () => {
    renderTestApp(<Navbar />, {});

    const aboutLink = screen.getByTestId('about-link');
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('uaers link navbar', async () => {
    renderTestApp(<Navbar />, {});

    const usersLink = screen.getByTestId('users-link');
    await userEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
})
