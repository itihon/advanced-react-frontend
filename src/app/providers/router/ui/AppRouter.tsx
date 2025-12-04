import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import routeConfig from 'shared/config/routeCounfig/routeConfig';

interface Props {
  
}

const AppRouter: React.FC<Props> = ({  }) => {
  const location = useLocation();

  return (
      <Suspense fallback={<div>Loading...</div>} key={location.key}>
        <Routes>
          {
            Object.values(routeConfig)
              .map(
                ({ path, element }) => <Route 
                  key={path} 
                  path={path} 
                  element={<div className="page-wrapper">{element}</div>} 
                />,
              )
          }
        </Routes>
      </Suspense>
  );
};

export default AppRouter;