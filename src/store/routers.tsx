import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import ProfilePage from '../containers/pages/Profile/ProfilePage';

const router = (
    <div>
        <Route exact={true} path="/" component={HomePage}/>
        <Route path="/profile" component={ProfilePage}/>
    </div>
);

export default router;
