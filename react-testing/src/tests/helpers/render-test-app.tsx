import { render } from "@testing-library/react";
import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
import AppRouter from "../../app-router";
import { MemoryRouter } from "react-router-dom";

interface Options {
  store?: RootState;
  route?: string;
}

export const renderTestApp = (component: React.ReactNode, options: Options) => {
  const store = createReduxStore(options?.store || {});

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route || '/']}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  )
}
