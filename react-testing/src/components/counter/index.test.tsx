import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../tests/helpers/render-test-app";

describe('Counter test', () => {
  test('test', async () => {
    const { getByTestId } =  renderTestApp(null, {
      route: '/',
      store: {
        counter: { value: 10 }
      }
    });
    const incrementBtn = getByTestId('increment-btn');

    expect(getByTestId('value-title')).toHaveTextContent('value: 10');

    await userEvent.click(incrementBtn);
    expect(getByTestId('value-title')).toHaveTextContent('value: 11');
  })
});

export {};
