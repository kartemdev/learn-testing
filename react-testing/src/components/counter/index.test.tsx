import { render, screen } from "@testing-library/react";
import Counter from ".";
import userEvent from "@testing-library/user-event";
import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";

describe('Counter test', () => {
  test('test', async () => {
    const { getByTestId } = render(
      <Provider store={createReduxStore({
        counter: { value: 10 }
      })}>
        <Counter />
      </Provider>
    );
    const incrementBtn = getByTestId('increment-btn');

    expect(getByTestId('value-title')).toHaveTextContent('value: 10');

    await userEvent.click(incrementBtn);
    expect(getByTestId('value-title')).toHaveTextContent('value: 11');
  })
});

export {};
