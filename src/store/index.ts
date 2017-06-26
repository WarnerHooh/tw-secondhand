import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';

import reducers from './reducers';
import middlewares from './middlewares';

const storeConfigure = (history: History) => {
    const reducer = combineReducers(reducers);
    const router = routerMiddleware(history);
    
    const createStoreWithMiddleware = applyMiddleware(router, ...middlewares)(createStore);
    
    return createStoreWithMiddleware(reducer);
};

export default storeConfigure;
