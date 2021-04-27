import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './Menu';
import Posts from './Posts';
import Users from './Users';

const Tasks = () => (
  <div>
    Tasks
  </div>
);

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className='margin'>
      <Switch>
        <Route exact path='/' component={Users}/>
        <Route exact path='/tasks' component={Tasks}/>
        <Route exact path='/posts/:key' component={Posts} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;