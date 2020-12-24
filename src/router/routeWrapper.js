import React from 'react';
import {
  Route, Redirect,
} from 'react-router-dom';
import AppBar from '../components/AppBar';
import { checkRoles } from '../configs/routerConfig';

export default function RouteWrapper({
  Component, roles, isPrivate, token, renderWithoutVerify, language, ...rest
}) {
  return (
            <Route
                {...rest}
                render={(props) => {
                  if (isPrivate) {
                    if (token) {
                      if (checkRoles(roles, ['superadmin'], false).includes(true)) {
                        return (
                          <AppBar language={language}>
                            <Component {...props}/>
                          </AppBar>
                        );
                      }
                      return <Redirect to='/'/>;
                    }
                    return <Redirect to='/sign-in'/>;
                  }
                  return !token || renderWithoutVerify ? <AppBar language={language}><Component {...props}/> </AppBar> : <Redirect to='/'/>;
                }}
            />
  );
}
