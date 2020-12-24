import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import { routerConfig } from '../configs/routerConfig';
import RouteWrapper from './routeWrapper';
import Axios from '../configs/axiosConfig';
import { languageAction } from '../store/actions';
import { supportedLanguages } from '../languages';

export default function Router() {
  const location = useLocation();
  const dispatch = useDispatch();
  const lang = location.pathname.split('/')[1];
  const [language, setLanguage] = useState(null);
  const [config, setConfig] = useState(() => (lang === '' ? routerConfig : supportedLanguages.includes(lang) ? routerConfig.map((el) => ({ ...el, path: `/${lang}${el.path}` })) : routerConfig));
  useEffect(() => {
    Axios.setConfiguration();
  }, []);

  useEffect(() => {
    const lang = location.pathname.split('/')[1];
    if (language !== null) {
      setConfig((prevcofig) => prevcofig.map((c) => ({ ...c, path: `${language}/${c.path.substring(lang.length === 2 ? 1 : 4)}` })));
    }
    dispatch(languageAction(language || lang.length === 2 ? lang : 'en'));
  }, [language]);

  return (
    <Fragment>
      <div>
      {
        <Switch>{
          config.map(({
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
                    setLanguage={setLanguage}
                  />)
            }
            <Route component = {() => <div>404</div>} />
        </Switch>
        }
      </div>
  </Fragment>
  );
}
