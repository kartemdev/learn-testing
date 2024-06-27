import { Link, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about-page";
import MainPage from "./pages/main-page";
import ErrorPage from "./pages/error-page";
import Users from "./users";
import UserDetailsPage from "./pages/user-details-page";

function App() {

  return (
    <div>
      <Link to='/' data-testid='main-link'>main</Link>
      <Link to='/about' data-testid='about-link'>about</Link>
      <Link to='/users' data-testid='users-link'>users</Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
