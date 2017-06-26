import * as React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import storeConfigure from './store';
import HomePage from './containers/pages/Home/HomePage';
// import routers from '../store/routers';

const history = createHistory();
const store = storeConfigure(history);

export default () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={HomePage}/>
            </div>
        </ConnectedRouter>
    </Provider>
);