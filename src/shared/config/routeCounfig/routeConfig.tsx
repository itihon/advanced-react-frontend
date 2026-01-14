import AboutPageAsync from "pages/AboutPage"
import ArticleDetailsPageAsync from "pages/ArticleDetailsPage";
import ArticlesPageAsync from "pages/ArticlesPage";
import MainPageAsync from "pages/MainPage";
import NotFoundPage from "pages/NotFoundPage";
import ProfilePageAsync from "pages/ProfilePage";
import { ReactNode } from "react";
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
}

export enum APIRoutes {
  LOGIN = 'login',
  COMMENTS = 'comments',
}

export const routePath: Record<AppRoutes | APIRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // /profile/id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // /articles/id
  [AppRoutes.NOT_FOUND]: '*',

  // api routes
  [APIRoutes.LOGIN]: '/login',
  [APIRoutes.COMMENTS]: '/comments/',
}

export type RouteCongigItem = RouteProps & {
  icon?: string | ReactNode;
  displayOnSidebar?: boolean;
  useParam?: boolean;
}

const routeConfig: Record<AppRoutes, RouteCongigItem> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPageAsync />,
    icon: '🏠',
    displayOnSidebar: true,
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <AboutPageAsync />,
    icon: '📋',
    displayOnSidebar: true,
  },
  [AppRoutes.PROFILE]: {
    path: `${routePath.profile}:id`,
    element: <ProfilePageAsync />,
    icon: '🪪',
    displayOnSidebar: true,
    useParam: true,
  },
  [AppRoutes.ARTICLES]: {
    path: routePath.articles,
    element: <ArticlesPageAsync />,
    icon: '📰',
    displayOnSidebar: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${routePath.article_details}:id`,
    element: <ArticleDetailsPageAsync />,
    icon: '',
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};

export default routeConfig;