import AboutPageAsync from "pages/AboutPage"
import MainPageAsync from "pages/MainPage";
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <AboutPageAsync />
  }
};

export default routeConfig;