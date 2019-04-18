import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from './firebase';
import NProgress from 'nprogress';

import Header from './components/Header';
import Home from './components/Home';
import Event from './components/Event';
import Login from './components/Login';
import NotFound from './components/NotFound';
import AuthRouter from './components/AuthRoute';
import { UserContext } from './context';

/**
 * App component
 */
const App = () => {
  const { initialising, user } = useAuthState(firebase.auth());

  useEffect(() => {
    NProgress.start();
    console.log('');
  }, []);

  // Checking user state
  useEffect(() => {
    NProgress.done();
  }, [user]);

  const isAuthed = user != null;

  return (
    <UserContext.Provider value={user}>
      <div className="mw6 center ph3 ph0-ns">
        <Header />
        {initialising ? (
          <></>
        ) : (
          <Router>
            <Switch>
              <AuthRouter
                exact
                path="/"
                component={Home}
                authed={isAuthed}
                redirectPath="/login"
              />
              <AuthRouter
                path="/event"
                component={Event}
                authed={isAuthed}
                redirectPath="/login"
              />
              <AuthRouter
                path="/login"
                component={Login}
                authed={!isAuthed}
                redirectPath="/"
              />
              <Route component={NotFound} />
            </Switch>
          </Router>
        )}
      </div>
    </UserContext.Provider>
  );
};

export default App;
