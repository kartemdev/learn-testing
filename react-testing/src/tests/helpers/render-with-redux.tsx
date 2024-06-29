import { render } from "@testing-library/react";
import { createReduxStore } from "../../store/store"
import { Provider } from "react-redux";

export const renderWithRedux = (component: React.ReactNode, initialStore?: RootState) => {
  const store = createReduxStore(initialStore || {});

  return render(
    <Provider store={store}>
      {component}
    </Provider>
  )
}
