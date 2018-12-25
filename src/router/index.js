import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router-dom';

import asyncComponent from '@/utils/asyncComponent.js';

const login = asyncComponent(() => import("@/components/Login"));

export default class RouteConfig extends Component{
  render() {
    return(
      <Router>
        <switch>
          <Route path="/" exact component={login} />
        </switch>
      </Router>
    )
  }
}