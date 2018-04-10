import React, { Component, Fragment } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import UserPage from './containers/UserPage';
import asyncComponent from './shared/asyncComponent';
import styleClass from './App.css';

const AsyncPizza = asyncComponent(() => import('./containers/Pizza.js'));

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <ul className={styleClass.NaviItems}>
          <li className={styleClass.NaviItem}><NavLink to="/" activeClassName={styleClass.active} exact>Users</NavLink></li>
          <li className={styleClass.NaviItem}><NavLink to="/pizza" activeClassName={styleClass.active} exact>Pizza</NavLink></li>
          </ul>
        </div>
        <div>
          <Switch>
          <Route path="/" exact component={UserPage} />
          <Route path="/pizza" component={AsyncPizza} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}
