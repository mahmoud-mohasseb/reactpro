import React, { useEffect, Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // withRouter,
} from 'react-router-dom';
import Spinner from './UI/spinner/Spinner';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';

const Header = lazy(() => import('./UI/Header/header'));
const Mainpage = lazy(() => import('./UI/Pages/Mainpage/Mainpage'));
const Home = lazy(() => import('./UI/Home/Home'));
const Jobs = lazy(() => import('./UI/Pages/Jobs/Jobs'));
const Chat = lazy(() => import('./UI/Pages/Chat/Chat'));

const App = (props) => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);
  // console.log(props.isgoogleAuth);

  let routes = (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );

  if (props.isAuthenticated || props.isgoogleAuth) {
    routes = (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Mainpage} />
          <Route exact path='/Jobs' component={Jobs} />
          <Route exact path='/Messaging' component={Chat} />
          <Route exact path='/Notification'>
            <h1>Notification</h1>
          </Route>
        </Switch>
      </Router>
    );
  }

  return (
    <Suspense fallback={<Spinner />}>
      <div className='App'>{routes}</div>;
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Auth.token !== null,
    isgoogleAuth: state.GoogleAuth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onGoogleauth: () => dispatch(actions.googleauth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
