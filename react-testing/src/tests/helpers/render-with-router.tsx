import { MemoryRouter } from "react-router-dom"
import { render } from "@testing-library/react";

import AppRouter from "../../app-router"

const renderWithRouter = (component: React.ReactNode = null, initialRoute = '/',) => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  )
}

export default renderWithRouter;
