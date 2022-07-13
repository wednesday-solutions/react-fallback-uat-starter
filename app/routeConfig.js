import React from 'react';
import NotFound from '@containers/NotFoundPage/Loadable';
import HomeContainer from '@containers/HomeContainer/Loadable';
import routeConstants from '@utils/routeConstants';
export const routeConfig = {
  repos: {
    component: HomeContainer,
    ...routeConstants.repos
  },
  newHomePath: {
    component: () => <h1>New Home Path</h1>,
    ...routeConstants.newHomePath
  },
  notFoundPage: {
    component: NotFound,
    route: '/'
  }
};
