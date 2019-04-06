import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// Layout components
import Header from './components/Header';

import firebase from './firebase';
const isAuthorized = firebase.auth().currentUser != null;

const RouteAuthorized = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthorized ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <div className="mw6 center ph3 ph0-ns">
        <Header />

        <Switch>
          <RouteAuthorized exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
