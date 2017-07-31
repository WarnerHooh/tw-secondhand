import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import SignUpPage from '../containers/pages/SignUp/SignUpPage';
import ProfilePage from '../containers/pages/Profile/ProfilePage';
import LoginPage from '../containers/pages/Login/LoginPage';
import OwnedPage from '../containers/pages/Owned/OwnedPage';
import BoughtPage from '../containers/pages/Bought/BoughtPage';

const router = (
  <div>
    <Route exact={true} path="/" component={HomePage}/>
    <Route path="/sign-up" component={SignUpPage}/>
    <Route path="/profile" component={ProfilePage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/owned" component={OwnedPage}/>
    <Route path="/bought" component={BoughtPage}/>
  </div>
);

export default router;
