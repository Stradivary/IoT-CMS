import React from 'react';
import {Provider} from 'react-redux';
import Store from './../redux/Store';
import history from './History';
import {
  Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import  './../assets/common/bootstarp4/bootstrap.min.css';
import  './../assets/common/custome.css';
import  './../assets/common/css/font-awesome.min.css';
import Dasboard from './../views/Dasboard';

const checkAuth = () => (
    <Provider store={Store} >
      <Router history={history}>
        <Switch>
          <Route  exact path="/" component={Dasboard} />
    </Switch>
    </Router>
  </Provider>
);
export default checkAuth;
