import React, { Suspense, memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes, useLocation } from "react-router-dom";
import routeConfig from 'shared/config/routeCounfig/routeConfig';
import { Loader } from 'shared/ui';
import PageError from 'widgets/PageError';

const AppRouter: React.FC = () => {
  const location = useLocation();

  return (
      <Suspense fallback={<Loader />} key={location.key}>
        <Routes>
          {
            Object.values(routeConfig)
              .map(
                ({ path, element }) => <Route 
                  key={path} 
                  path={path} 
                  element={
                    <div className="page-wrapper">
                      <ErrorBoundary fallback={<PageError />}>
                        {element}
                      </ErrorBoundary>
                    </div>
                  } 
                />,
              )
          }
        </Routes>
      </Suspense>
  );
};

export default memo(AppRouter);