import AboutPageAsync from "pages/AboutPage"
import MainPageAsync from "pages/MainPage";
import NotFoundPage from "pages/NotFoundPage";
import ProfilePageAsync from "pages/ProfilePage";
import { ReactNode } from "react";
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
}

export type RouteCongigItem = RouteProps & {
  icon?: string | ReactNode;
}

const routeConfig: Record<AppRoutes, RouteCongigItem> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPageAsync />,
    icon: '🏠',
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <AboutPageAsync />,
    icon: '🧾',
  },
  [AppRoutes.PROFILE]: {
    path: routePath.profile,
    element: <ProfilePageAsync />,
    icon: '📋',
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};

export default routeConfig;