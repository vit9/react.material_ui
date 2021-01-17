import React from 'react';
import {
  Route, Redirect,
} from 'react-router-dom';
import AppBar from '../components/AppBar';
import { checkRoles, authSupportedRoutes } from '../configs/routerConfig';

export default function RouteWrapper({
  Component, roles, isPrivate, token, renderWithoutVerify, setLanguage, ...rest
}) {
  return (
            <Route
                {...rest}
                render={(props) => {
                  if (isPrivate) {
                    if (token) {
                      if (checkRoles(roles, ['superadmin'], false).includes(true)) {
                        return (
                          <AppBar setLanguage={setLanguage}>
                            <Component {...props}/>
                          </AppBar>
                        );
                      }
                      return <Redirect to='/'/>;
                    }
                    return <Redirect to='/sign-in'/>;
                  }
                  return !token || renderWithoutVerify ? <AppBar setLanguage={setLanguage} isDrawer={!authSupportedRoutes.includes(rest.path)}><Component {...props}/> </AppBar> : <Redirect to='/'/>;
                }}
            />
  );
}
