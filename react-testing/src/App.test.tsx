import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
  test('Elements in the document', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const buttonElement = screen.getByRole('button');
    const inputElement = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toMatchSnapshot();
  });

  test('screen.get screen.query', async () => {
    render(<App/>);
    const helloWorldElement = screen.queryByText(/bye world/i);
    expect(helloWorldElement).toBeNull();

    screen.debug();
    const dataElement = await screen.findByText(/data/i);
    expect(dataElement).toBeInTheDocument();
    expect(dataElement).toHaveStyle({ color: 'red' });
    screen.debug();
  });

  test('click event', () => {
    render(<App/>);
    const btnElement = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btnElement);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btnElement);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('input event', () => {
    render(<App/>);
    const inputElement = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // Искуственное событие
    fireEvent.input(inputElement, {
      target: { value: 'example test text' }
    });
    expect(screen.queryByTestId('value-elem')).toContainHTML('example test text');

    fireEvent.input(inputElement, {
      target: { value: '' }
    });
    expect(screen.queryByTestId('value-elem')).not.toContainHTML('example test text');

    // Близко к пользователю, обрабатывается события нажатия клавиш (пробела, капс лока) и т.д
    userEvent.type(inputElement, 'example text');
    expect(screen.queryByTestId('value-elem')).toContainHTML('example text');
  });
})
