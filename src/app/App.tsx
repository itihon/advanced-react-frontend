import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import AppRouter from "./providers/router";
import Navbar from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import SuspenseOverlay from "suspense-overlay";

export default function App() {
  const {theme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <SuspenseOverlay fallback="...Loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </SuspenseOverlay>
    </div>
  )
}