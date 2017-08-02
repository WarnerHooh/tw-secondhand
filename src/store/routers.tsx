import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import ProfilePage from '../containers/pages/Profile/ProfilePage';
import OwnedPage from '../containers/pages/Owned/OwnedPage';
import BoughtPage from '../containers/pages/Bought/BoughtPage';

const router = (
  <div>
    <Route exact={true} path="/" component={HomePage}/>
    <Route path="/profile" component={ProfilePage}/>
    <Route path="/owned" component={OwnedPage}/>
    <Route path="/bought" component={BoughtPage}/>
  </div>
);

export default router;
