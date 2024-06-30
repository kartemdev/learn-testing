import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main-page";
import AboutPage from "../pages/about-page";
import Users from "../pages/users";
import UserDetailsPage from "../pages/user-details-page";
import ErrorPage from "../pages/error-page";
import HelloWorld from "../pages/hello-world-page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/hello" element={<HelloWorld />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRouter;
