import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './page/IndexPage';
import Slider from './page/silder/Slider';
import Them from './page/them/Them';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/slider"  component={Slider} />
        <Route path="/them"  component={Them} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
