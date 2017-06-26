import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';

const router = (
    <div>
        <Route path="/" component={HomePage}/>
    </div>
);

export default router;