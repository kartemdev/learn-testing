import { MemoryRouter } from "react-router-dom"
import { render } from "@testing-library/react";

import AppRouter from "../../app-router"

const renderWithRouter = (initialRoute = '/', component: React.ReactNode = null) => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  )
}

export default renderWithRouter;
