import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './Menu';
import Users from './users';

const Tasks = () => (
  <div>
    Tasks
  </div>
);

const App = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path='/' component={Users}/>
      <Route exact path='/tasks' component={Tasks}/>
    </Switch>
  </BrowserRouter>
);

export default App;