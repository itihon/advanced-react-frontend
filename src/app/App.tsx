import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import AppRouter from "./providers/router";
import Navbar from "widgets/Navbar";
import Sidebar from "widgets/Sidebar";
import SuspenseOverlay from "suspense-overlay";
import { Loader } from "shared/ui";
import { initUser } from "entities/User";
import { useDispatch } from "react-redux";

export default function App() {
  const {theme} = useTheme();
  const dispatch = useDispatch();

  dispatch(initUser());

  return (
    <div className={`app ${theme}`}>
      <SuspenseOverlay fallback={<Loader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </SuspenseOverlay>
    </div>
  )
}