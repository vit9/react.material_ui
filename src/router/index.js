import React, { Fragment, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routerConfig } from '../configs/routerConfig';
import RouteWrapper from './routeWrapper';
import setAxios from '../configs/axiosConfig';

export default function Router() {
  useEffect(() => {
    setAxios();
    (() => {
      console.log(this);
    })();
  }, []);

  return (
    <Fragment>
      <div>
      {
        <Switch>{
            routerConfig.map(({
              id, Component, roles, isPrivate, path, renderWithoutVerify,
            }) => <RouteWrapper
                    id={id}
                    Component={Component}
                    roles={roles}
                    isPrivate={isPrivate}
                    path={path}
                    exact
                    key={id}
                    token={localStorage.accessToken}
                    renderWithoutVerify={renderWithoutVerify}
                    />)
            }
            <Route component = {() => <div>404</div>} />
        </Switch>
        }
      </div>
  </Fragment>
  );
}
