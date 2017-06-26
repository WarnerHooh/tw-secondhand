import * as React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import storeConfigure from '../store';
import HomePage from './pages/Home/HomePage';
// import routers from '../store/routers';

const store = storeConfigure();
const history = syncHistoryWithStore(browserHistory, store);

export default () => (
    <Provider store={store}>
        <Router history={history}>
        <Route path="/" component={HomePage}>
            <Route path="foo" component={() => <span>123</span>}/>
            <Route path="bar" component={() => <div>321</div>}/>
        </Route>
        </Router>
    </Provider>
);