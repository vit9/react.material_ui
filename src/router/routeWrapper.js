import React from 'react';
import {
  Route, Redirect,
} from 'react-router-dom';
import { checkRoles } from '../configs/routerConfig';

export default function RouteWrapper({
  Component, roles, isPrivate, token, renderWithoutVerify, ...rest
}) {
  return (
            <Route
                {...rest}
                render={(props) => {
                  if (isPrivate) {
                    if (token) {
                      if (checkRoles(roles, ['superadmin'], false).includes(true)) {
                        return (
                            <Component {...props}/>
                        );
                      }
                      return <Redirect to='/'/>;
                    }
                    return <Redirect to='/signIn'/>;
                  }
                  return !token || renderWithoutVerify ? <Component {...props}/> : <Redirect to='/'/>;
                }}
            />
  );
}
