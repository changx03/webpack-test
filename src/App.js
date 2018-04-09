import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import UserPage from './containers/UserPage';
import asyncComponent from './shared/asyncComponent';

const PizzaPage = asyncComponent(() => import('./containers/Pizza'));

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <ul>
            <Link to="/">Users</Link>
            <Link to="/pizza">Pizza</Link>
          </ul>
        </div>
        <div>
          <Route path="/" exact component={UserPage} />
          <Route path="/pizza" component={PizzaPage} />
        </div>
      </Fragment>
    );
  }
}
