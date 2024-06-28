import { render, screen } from '@testing-library/react';
import Users from './index';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../tests/helpers/render-with-router';

jest.mock('axios');

describe('USERS TEST', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          "id": 3,
          "name": "Clementine Bauch",
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
        },
      ]
    }
  });

  beforeEach(() => {
    axios.get.mockReturnValue(response);
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Get users', async () => {
    render(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(4)
    expect(axios.get).toBeCalledTimes(1);
    screen.debug()
  });

  test('Redirect to details user', async () => {
    renderWithRouter('/users');
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(4)
    await userEvent.click(users[0])
    expect(screen.getByTestId('user-details-page')).toBeInTheDocument();
  });
})
