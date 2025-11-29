import { Route, Routes, useLocation } from "react-router-dom";
import Counter from "./components/Counter";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import AboutPageAsync from "./pages/AboutPage/AboutPageAsync";
import MainPageAsync from "./pages/MainPage/MainPageAsync";
import { Suspense } from "react";
import useTheme from "./theme/useTheme";

export default function App() {
  const location = useLocation();
  const {theme, switchTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={switchTheme}>Switch theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>} key={location.key}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  )
}