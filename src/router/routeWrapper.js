import React from 'react';
import {
  Route, Redirect,
} from 'react-router-dom';
import AppBar from '../components/AppBar';
import { checkRoles } from '../configs/routerConfig';

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
                          <AppBar v={setLanguage}>
                            <Component {...props}/>
                          </AppBar>
                        );
                      }
                      return <Redirect to='/'/>;
                    }
                    return <Redirect to='/sign-in'/>;
                  }
                  return !token || renderWithoutVerify ? <AppBar setLanguage={setLanguage}><Component {...props}/> </AppBar> : <Redirect to='/'/>;
                }}
            />
  );
}
