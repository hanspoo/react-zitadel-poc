import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createZitadelAuth, ZitadelConfig } from '@zitadel/react';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Callback from './components/Callback';

function App() {
  const config: ZitadelConfig = {
    authority: 'http://localhost:8080/',
    client_id: '275414623035917827@zitadel-project',
    redirect_uri: 'http://localhost:4200/callback',
    post_logout_redirect_uri: 'http://localhost:4200/callback',
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to ZITADEL React</p>

        <Routes>
          <Route
            index
            element={
              <Login authenticated={authenticated} handleLogin={login} />
            }
          />
          <Route
            path="/admin/callback"
            element={
              <Callback
                authenticated={authenticated}
                setAuth={setAuthenticated}
                handleLogout={signout}
                userManager={zitadel.userManager}
              />
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
