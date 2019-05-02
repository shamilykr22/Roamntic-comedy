import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from './layouts/mainLayout';

export default (
  <div style={{ height: '100%' }}>
    <Switch>
      <Route path="/" component={MainLayout} />
    </Switch>
  </div>
);
