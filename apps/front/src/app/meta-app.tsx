import { Footer, FormArticle, LandingHome, Navbar } from '@freedom/components';
import { Route, Routes } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import { createZitadelAuth, ZitadelConfig } from '@zitadel/react';

import Login from './components/Login';
import Callback from './components/Callback';
import { RootState } from '@freedom/redux-store';
import { useSelector } from 'react-redux';

export function MetaApp() {
  const { org } = useSelector((state: RootState) => state.config);
  const config: ZitadelConfig = {
    authority: import.meta.env.VITE_ZITADEL_SERVER || 'nada',
    client_id: org?.clientId,
    redirect_uri: `http://${org?.host}/admin/callback`,
    post_logout_redirect_uri: `http://${org?.host}/admin/callback`,
  };

  const zitadel = createZitadelAuth(config);

  function login() {
    zitadel.authorize();
  }

  function signout() {
    zitadel.signout();
  }

  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    zitadel.userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, [zitadel]);

  return (
    <div className="flex h-screen flex-col justify-between">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/article" element={<FormArticle />} />
          <Route path="/admin/*">
            <Route
              path=""
              element={
                <Login authenticated={authenticated} handleLogin={login} />
              }
            />
            <Route
              path="callback"
              element={
                <Callback
                  authenticated={authenticated}
                  setAuth={setAuthenticated}
                  handleLogout={signout}
                  userManager={zitadel.userManager}
                />
              }
            />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
