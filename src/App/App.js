import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';

import connection from '../helpers/data/connection';

import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/pages/Auth/Auth';
import Fleet from '../components/pages/Fleet/Fleet';
import TugForm from '../components/pages/TugForm/TugForm';
import Locations from '../components/pages/Locations/Locations';
import SingleLocation from '../components/pages/SingleLocation/SingleLocation';
import './App.scss';
import authRequests from '../helpers/data/authRequests';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/fleet', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          pendingUser: false,
        });
      } else {
        this.setState({
          authed: false,
          pendingUser: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    const { authed, pendingUser } = this.state;

    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (pendingUser) {
      return null;
    }

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent} />
              <Switch>
                <PrivateRoute path='/' exact component={Fleet} authed={authed} />
                <PrivateRoute path='/fleet/add' component={TugForm} authed={authed} />
                <PrivateRoute path='/fleet' component={Fleet} authed={authed} />
                <PrivateRoute path='/locations/:id' component={SingleLocation} authed={authed} />
                <PrivateRoute path='/locations' component={Locations} authed={authed} />
                <PublicRoute path='/auth' component={Auth} authed={authed} />
              </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
