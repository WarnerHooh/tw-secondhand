import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import SignUpPage from '../containers/pages/SignUp/SignUpPage';
import ProfilePage from '../containers/pages/Profile/ProfilePage';
import LoginPage from '../containers/pages/Login/LoginPage';

const router = (
  <div>
    <Route exact={true} path="/" component={HomePage}/>
    <Route path="/sign-up" component={SignUpPage}/>
    <Route path="/profile" component={ProfilePage}/>
    <Route path="/login" component={LoginPage}/>
  </div>
);

export default router;
